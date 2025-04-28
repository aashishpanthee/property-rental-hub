"use server";

import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

export async function getUnreadMessageCount() {
  await connectDb();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    return new Error("Unauthorized. User ID is required");
  }

  const userId = sessionUser.userId;

  const count = await Message.countDocuments({ recipient: userId, read: false });

  return { count };
}
