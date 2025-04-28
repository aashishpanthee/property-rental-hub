"use client";

import { deleteMessage } from "@/app/actions/deleteMessage";
import { markMessageAsRead } from "@/app/actions/markMessageAsRead";
import { useGlobalContext } from "@/context/GlobalContext";
import { useState } from "react";
import { toast } from "react-toastify";

function MessageCard({ message }) {
  const [isRead, setIsRead] = useState(message.read);
  const [isDeleting, setIsDeleting] = useState(false);
  const { setUnreadCount } = useGlobalContext();

  const handleMarkAsRead = async () => {
    const read = await markMessageAsRead(message._id);
    setIsRead(read);
    setUnreadCount((prev) => (read ? prev - 1 : prev + 1));
    toast.success(`Marked As ${read ? "read" : "new"}`);
  };

  const handleDelete = async () => {
    await deleteMessage(message._id);
    setIsDeleting(true);
    setUnreadCount((prev) => (isRead ? prev : prev - 1));
    toast.success("Message deleted");
  };

  if (isDeleting) {
    return <p>Deleting Message...</p>;
  }

  return (
    <div className='bg-white relative p-4 rounded-md shadow-md border border-gray-200'>
      {!isRead && <div className='absolute top-2 right-2 bg-yellow-500 text-white py-1 px-3 rounded-md'>New</div>}
      <h2 className='text-xl mb-4'>
        <span className='font-bold'>Property Inquiry :</span> {message.property.name}
      </h2>
      <p className='text-gray-700'>{message.body}</p>
      <ul className='mt-4'>
        <li>
          <strong>Reply Email:</strong>{" "}
          <a href={`mailto:${message.sender.email}`} className='text-blue-500'>
            {message.email}
          </a>
        </li>
        <li>
          <strong>Reply Phone:</strong>{" "}
          <a href={`tel:${message.phone}`} className='text-blue-500'>
            {message.phone}
          </a>
        </li>
        <li>
          <strong>Received:</strong> {new Date(message.createdAt).toLocaleString()}
        </li>
      </ul>
      <button
        className='mt-4 mr-3 bg-blue-500 text-white py-1 px-3 rounded-md cursor-pointer'
        onClick={handleMarkAsRead}
      >
        {isRead ? "Mark as New" : "Mark as Read"}
      </button>
      <button className='mt-4 bg-red-500 text-white py-1 px-3 rounded-md cursor-pointer' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default MessageCard;
