import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href={'/'} passHref>
          Accueil
        </Link>

        <Link href={'/blog'} passHref>
          Blog
        </Link>
      </nav>
    </>
  )
}