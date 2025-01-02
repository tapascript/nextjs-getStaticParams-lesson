export function generateStaticParams() {
  return [
    { dept: "HR", city: "New York" },
    { dept: "Finance", city: "Austria" },
    { dept: "Dev", city: "Bangalore" },
  ];
}

export default async function Page({ params }) {
  const { dept, city } = await params;

  return (
    <div>
      The employee works in the <strong>{dept}</strong> department,{" "}
      <strong>{city}</strong>.{" "}
    </div>
  );
}
