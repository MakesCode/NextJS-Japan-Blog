import style from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home({ posts }) {
  return (
    <main >
      <div className={style.bloc_titre}>
        <h1 className={style.titre}>{posts.blogListe.length} façons incroyables de voir le Japon</h1>
        <div className={style.circle} />
      </div>
      <div className={style.blog}>
        {
          posts.blogListe.map(post => (
            <div key={post.id} className={style.item}>
              <Image src={post.image} layout='responsive' width={'500px'} height={'500px'} />
              <h1>{post.titre}</h1>
              <p>{post.description.slice(0, 150)}...</p>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/blog')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}