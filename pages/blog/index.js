import Link from 'next/link'

export default function Blog() {
  return (
    <>
      <div>

        <Link href="/blog/id" passHref>
          <a>Visitez l'article</a>
        </Link>
      </div>
    </>
  )
}