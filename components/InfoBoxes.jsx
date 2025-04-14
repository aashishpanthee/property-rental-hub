import { InfoBox } from "@/components";
function InfoBoxes() {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            title='For Renters'
            backgroundColor='bg-gray-100'
            textColor='text-gray-800'
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find your dream rental property. Bookmark properties and contact owners.
          </InfoBox>
          <InfoBox
            title='For Property Owners'
            backgroundColor='bg-blue-200'
            buttonInfo={{
              text: "Add Property",
              link: "/properties",
              backgroundColor: "bg-blue-500",
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
}

export default InfoBoxes;
