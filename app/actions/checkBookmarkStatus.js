"use server";

import connectDb from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

export async function checkBookmarkStatus(propertyId) {
  await connectDb();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    return new Error("Unauthorized. User ID is required");
  }

  const userId = sessionUser.userId;

  const user = await User.findById(userId);
  let isBookmarked = user.bookmarks.includes(propertyId);
  return { isBookmarked };
}
