"use server";

import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

export async function addMessage(previousState, formData) {
  await connectDb();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("UserId is required");
  }
  const { userId } = sessionUser;
  const recipient = formData.get("recipient");
  const property = formData.get("property");

  if (userId === recipient) {
    return { error: "You cannot send a message to yourself" };
  }
  const newMessage = new Message({
    sender: userId,
    recipient,
    property,
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    body: formData.get("body"),
  });
  await newMessage.save();
  return { submitted: true };
}
