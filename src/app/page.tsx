import { AnimatedLanding } from "@/components/animated-landing"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <AnimatedLanding />
      <Image
        alt="Mountains"
        src={"/hero-background.svg"}
        fill
        sizes="(min-width: 120rem) 50vw, 100vw"
        style={{
          objectFit: "cover", // cover, contain, none
        }}
        quality={100}
        priority
        className="absolute top-0 -z-10"
      />
    </>
  )
}