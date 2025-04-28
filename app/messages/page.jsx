import { MessageCard } from "@/components";
import connectDb from "@/config/database";
import Message from "@/models/Message";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";
import { getSessionUser } from "@/utils/getSessionUser";
import { redirect } from "next/navigation";

async function MessagesPage() {
  connectDb();
  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;
  const readMessages = await Message.find({ recipient: userId, read: true })
    .sort({ createdAt: -1 })
    .populate("sender", "username")
    .populate("property", "name")
    .lean();
  const unReadMessages = await Message.find({ recipient: userId, read: false })
    .sort({ createdAt: -1 })
    .populate("sender", "username")
    .populate("property", "name")
    .lean();
  const messages = [...unReadMessages, ...readMessages].map((messageDoc) => {
    const message = convertToSerializableObject(messageDoc);
    message.sender = convertToSerializableObject(message.sender);
    message.property = convertToSerializableObject(message.property);
    return message;
  });

  return (
    <section className='bg-blue-50 min-h-screen'>
      <div className='container m-auto max-w-6xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <h1 className='text-3xl font-bold mb-4'>Your Messages</h1>
          {messages.length === 0 ? (
            <p className='text-gray-600'>No messages found</p>
          ) : (
            messages.map((message) => <MessageCard key={message._id} message={message} />)
          )}
        </div>
      </div>
    </section>
  );
}

export default MessagesPage;
