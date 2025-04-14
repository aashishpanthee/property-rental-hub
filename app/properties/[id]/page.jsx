async function PropertyPage({ params }) {
  const { id } = await params;
  return <div>{id}</div>;
}

export default PropertyPage;
