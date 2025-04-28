"use server";

import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

export async function deleteMessage(messageId) {
  await connectDb();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("UserId is required");
  }
  const { userId } = sessionUser;
  const message = await Message.findById(messageId);

  if (userId !== message.recipient.toString()) {
    throw new Error("Unauthorized. You are not the recipient of this message");
  }

  await message.deleteOne();
  revalidatePath("/messages", "page");
  return { success: true };
}
