import { PropertyAddForm } from "@/components";
function AddPropertyPage() {
  return (
    <section className='bg-blue-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md border border-gray-200 m-4 md:m-0 rounded-md'>
          <PropertyAddForm />
        </div>
      </div>
    </section>
  );
}

export default AddPropertyPage;
