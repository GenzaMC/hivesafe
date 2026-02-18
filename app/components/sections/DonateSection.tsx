import Image from "next/image"

export default function DonateSection() {
  return (
    <section className="relative flex justify-center py-24">

      <div className="relative w-[700px] h-[500px]">

        <Image
          src="/chest.png"
          alt="Donate"
          fill
          className="object-contain"
        />

        <div className="absolute bottom-10 w-full flex justify-center">
          <button className="bg-green-500 hover:bg-green-400 px-10 py-4 rounded-xl font-bold text-xl shadow-lg">
            Donate
          </button>
        </div>

      </div>

    </section>
  )
}
