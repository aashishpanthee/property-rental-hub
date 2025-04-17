import PropertyDetails from "@/components/PropertyDetails";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import connectDb from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
async function PropertyPage({ params }) {
  await connectDb();
  const { id } = await params;
  const property = await Property.findById(id).lean();
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      {/* Back Button */}
      <section>
        <div className='container m-auto py-6 px-6 cursor-pointer'>
          <Link href='/properties' className='text-blue-500 hover:text-blue-600 flex items-center'>
            <FaArrowLeft className='mr-2' /> Back to Properties
          </Link>
        </div>
      </section>
      {/* Main Property Section */}
      <section className='bg-blue-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='layout-70-30'>
            {/* Property Info */}
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
    </>
  );
}

export default PropertyPage;
