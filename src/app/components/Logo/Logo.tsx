import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"

export const Logo: React.FC<{ logoSrc: StaticImageData }> = ({ logoSrc }) => {
  return (
    <Link href="/" style={{ alignSelf: "center" }}>
      <Image src={logoSrc} alt="Logo_Financy" />
    </Link>
  )
}
