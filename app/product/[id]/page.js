export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({ params }) {
  const { id } = await params;

  return <div>{id}</div>;
}
