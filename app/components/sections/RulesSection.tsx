import Image from "next/image"

export default function RulesSection() {
  return (
    <section className="relative flex justify-center py-24">

      <div className="relative w-[900px] h-[600px]">

        <Image
          src="/rules.png"
          alt="Rules"
          fill
          className="object-contain"
        />

        <div className="absolute bottom-20 w-full flex justify-center">
          <button className="bg-green-500 hover:bg-green-400 px-8 py-4 rounded-xl font-bold shadow-lg">
            View All Rules
          </button>
        </div>

      </div>

    </section>
  )
}
