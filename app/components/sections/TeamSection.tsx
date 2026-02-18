import Image from "next/image"

export default function TeamSection() {
  return (
    <section className="relative flex justify-center py-24">

      <div className="relative w-[1100px] h-[450px]">
        <Image
          src="/team.png"
          alt="Team"
          fill
          className="object-contain"
        />
      </div>

    </section>
  )
}
