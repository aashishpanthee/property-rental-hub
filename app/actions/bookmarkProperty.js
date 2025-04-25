"use server";

import connectDb from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

export async function bookmarkProperty(propertyId) {
  await connectDb();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    return new Error("Unauthorized. User ID is required");
  }

  const userId = sessionUser.userId;

  const user = await User.findById(userId);
  let isBookmarked = user.bookmarks.includes(propertyId);
  let message;

  if (isBookmarked) {
    // if already bookmarked, remove it
    user.bookmarks.pull(propertyId);
    message = "Property removed from bookmarks";
    isBookmarked = false;
  } else {
    // if not bookmarked, add it
    user.bookmarks.push(propertyId);
    message = "Property added to bookmarks";
    isBookmarked = true;
  }
  await user.save();

  revalidatePath("/properties/saved", "page");

  return { message, isBookmarked };
}
