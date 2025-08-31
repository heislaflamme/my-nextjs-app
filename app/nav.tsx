import Link from "next/link"
import Image from "next/image"

export default function Nav() {
  return (
    <nav className='fixed flex justify-evenly bottom-0 mb-4 left-1/2 -translate-x-1/2 p-3 rounded-full w-[40vw] max-md:w-[70vw] max-sm:w-[93vw]'>
      <Link href='/'><Image src="/home.png" alt="home" width={30} height={30} quality={10}/></Link>
      <Link href='/skills'><Image src="/skills.png" alt="skills" width={30} height={30} quality={10}/></Link>
      <Link href='/project'><Image src="/projects.png" alt="projects" width={30} height={30} quality={10}/></Link>
      <Link href='/about'><Image src="/about.png" alt="about" width={30} height={30} quality={10}/></Link>
      <Link href='/contact'><Image src="/contact.png" alt="contact" width={30} height={30} quality={10}/></Link>
    </nav>
  )
}
