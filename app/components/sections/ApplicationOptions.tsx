import Image from "next/image"

function BeeCard({ image }: { image: string }) {
  return (
    <div className="relative w-[340px] h-[420px] transition-all duration-300 hover:scale-105">

      <Image
        src={image}
        alt="Bee Option"
        fill
        sizes="340px"
        className="object-contain"
        priority
      />

      {/* Apply Button */}
      <div className="absolute bottom-14 w-full flex justify-center">
        <button
          className="
            bg-gradient-to-b from-yellow-400 to-yellow-500
            hover:from-yellow-300 hover:to-yellow-400
            active:scale-95
            px-6 py-3
            rounded-xl
            font-bold
            shadow-lg
            transition-all duration-200
          "
        >
          Apply Now
        </button>
      </div>

    </div>
  )
}

export default function ApplicationOptions() {
  return (
    <section className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-16 py-32">

      <BeeCard image="/lone-bee-frame.png" />
      <BeeCard image="/bee-squad-frame.png" />
      <BeeCard image="/bee-family-frame.png" />

    </section>
  )
}
