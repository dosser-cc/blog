import Image from "next/image"

export default function Section1() {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-2">
        <h1 className="font-bold text-4xl pb-12 text-center">Dosser</h1>

        {Slide()}

      </div>
    </section>
  )
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Image src={"/images/forest.jpg"} width={600} height={600} />
      </div>
      <div className="info">
        
      </div>
    </div>
  )
}
