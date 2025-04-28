import { Pagination, PropertyCard } from "@/components";
import connectDb from "@/config/database";
import Property from "@/models/Property";

async function PropertiesPage({ searchParams }) {
  await connectDb();
  const { page = 1, pageSize = 9 } = await searchParams;
  const skip = (page - 1) * pageSize;
  const total = await Property.countDocuments({});
  const properties = await Property.find({}).skip(skip).limit(pageSize);
  const showPagination = total > pageSize;
  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {properties.length === 0 ? (
          <p className='text-center text-2xl font-bold'>No properties found</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
        {showPagination && <Pagination page={parseInt(page)} pageSize={parseInt(pageSize)} totalItems={total} />}
      </div>
    </section>
  );
}

export default PropertiesPage;
