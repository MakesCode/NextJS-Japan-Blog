export default function Article({ post }) {
  return (
    <>
      <h1>{post.titre}</h1>
      <p>{post.description}</p>
    </>
  )
}

export async function getStaticProps(context) {
  const id = context.params.slug
  const res = await fetch(`http://localhost:3000/api/blog/${id}`)
  const post = await res.json()

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/blog')
  const posts = await res.json()
  const paths = posts.blogListe.map(item => ({
    params: { slug: item.id.toString() }
  }))
  return {
    paths,
    fallback: false
  }
}