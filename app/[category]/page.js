

export const dynamicParams = false

export async function generateStaticParams() {
  const postFetch = await fetch("https://api.vercel.app/blog");
  const posts = await postFetch.json();

  const topPosts = posts.slice(0, 2)

  //console.log(topPosts)

  return topPosts.map((post) => ({
    category: post.category,
  }));
}

export default async function Home({ params }) {
  const { category } = await params;
  console.log(category);
  return <div>{category}</div>;
}
