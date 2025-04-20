import PropertyEditForm from '@/components/PropertyEditForm';
import connectDb from '@/config/database';
import Property from '@/models/Property';
import { convertToSerializableObject } from '@/utils/convertToObject';

async function PropertyEditPage({ params }) {
  await connectDb();
  const { id } = await params;
  const propertyDoc = await Property.findById(id).lean();
  const property = convertToSerializableObject(propertyDoc);
  if (!property) {
    return <div className='text-center text-2xl font-bold mt-10'>Property not found</div>;
  }

  return (
    <section className='bg-blue-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0 border-gray-200'>
          <PropertyEditForm property={property} />
        </div>
      </div>
    </section>
  );
}

export default PropertyEditPage;
