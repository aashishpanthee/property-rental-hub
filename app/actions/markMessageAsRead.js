"use server";

import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

export async function markMessageAsRead(messageId) {
  await connectDb();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    return new Error("Unauthorized. User ID is required");
  }

  const userId = sessionUser.userId;

  const message = await Message.findById(messageId);
  if (!message) {
    throw new Error("Message not found");
  }

  // verify ownership
  if (message.recipient.toString() !== userId) {
    throw new Error("Unauthorized. You are not the recipient of this message");
  }

  // update the message to read
  message.read = !message.read;
  revalidatePath("/messages", "page");
  await message.save();
  return message.read;
}
