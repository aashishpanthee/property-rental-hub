"use client";
import { bookmarkProperty } from "@/app/actions/bookmarkProperty";
import { checkBookmarkStatus } from "@/app/actions/checkBookmarkStatus";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";
function BookmarkButton({ property }) {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!userId) {
      return;
    }
    checkBookmarkStatus(property._id).then((res) => {
      if (res.error) toast.error(res.error);
      if (res.isBookmarked) {
        setIsBookmarked(res.isBookmarked);
      }
    });
  }, [property._id, userId, checkBookmarkStatus]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("Please login to bookmark properties");
      return;
    }
    bookmarkProperty(property._id).then((res) => {
      if (res.error) return toast.error(res.error);
      setIsBookmarked(res.isBookmarked);
      toast.success(res.message);
    });
  };

  return isBookmarked ? (
    <button
      className='bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center cursor-pointer'
      onClick={handleClick}
    >
      <FaBookmark className='mr-2' /> Remove Bookmark
    </button>
  ) : (
    <button
      className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center cursor-pointer'
      onClick={handleClick}
    >
      <FaBookmark className='mr-2' /> Bookmark Property
    </button>
  );
}

export default BookmarkButton;
