"use client";
import { FaSpinner } from "react-icons/fa";

function SubmitMessageButton({ pending, content, icon }) {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
      type='submit'
      disabled={pending}
    >
      {pending ? <FaSpinner className='mr-2 animate-spin' /> : icon}
      {content}
    </button>
  );
}

export default SubmitMessageButton;
