export function generateStaticParams() {
  return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }]
}
 

export default async function Page({ params }) {
  const { slug } = await params
  console.log(slug)
  return (
    <ul>
      {slug.map(fragment => (
        <li key={fragment}>
          {fragment}
        </li>
      ))}
    </ul>
  )
}