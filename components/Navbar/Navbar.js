import Link from "next/link";
import style from '../../styles/Navbar.module.css'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  return (
    <header className={style.header}>
      <p className={style.titre}>Japan ^.^</p>
      <nav className={style.navbar}>
        <Link href={'/'} passHref >
          <a className={router.pathname === "/" ? style.active : ""}>Accueil</a>
        </Link>

        <Link href='mailto:chauvin.allan1997@outlook.fr' passHref>
          Contact
        </Link>

      </nav>
    </header>
  )
}