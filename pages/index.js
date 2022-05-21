import style from '../styles/Home.module.css'
import Image from 'next/image'
import Link from "next/link";


export default function Home({ posts }) {
  return (
    <main >
      <div className={style.bloc_titre}>
        <h1 className={style.titre}>{posts && posts.blogListe.length} façons incroyables de voir le Japon</h1>
        <div className={style.circle} />
      </div>
      <div className={style.blog}>
        {posts &&
          posts.blogListe.map(post => (
            <div key={post.id} className={style.item}>
              <Image src={post.image} layout='responsive' width={'500px'} height={'500px'} placeholder="blur" blurDataURL={post.image} />
              <h1 className={style.titre_item}>{post.titre}</h1>
              <p>{post.description.slice(0, 150)}...</p>
              <Link href={`blog/${post.id}`}>
                Voir l'articles
              </Link>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_PUBLIC}/blog`)
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}