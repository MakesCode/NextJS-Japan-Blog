import Image from "next/image"
import style from '../../styles/Article.module.css'


export default function Article({ post }) {
  return (
    <>
      {post && (
        <main className={style.main}>
          <div className={style.image} >
            <Image src={post.image} layout='responsive' width={'700px'} height={'700px'} placeholder="blur" blurDataURL={post.image} />
          </div>
          <div className={style.content} >
            <h1>{post.titre}</h1>
            <p>{post.description}</p>
          </div>
        </main>
      )}
    </>
  )
}

export async function getStaticProps(context) {
  const id = context.params.slug
  const res = await fetch(`/blog/${id}`)
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