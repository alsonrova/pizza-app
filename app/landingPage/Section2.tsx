import Image from "next/image";

function Section2() {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center">
        <Image src="/assets/decorationwhite2.png" className="w-[556px]" width={556} height={60} alt="Décoration" />
        <h2 className="text-2xl -translate-y-24">
            Bienvenue chez Pizza House !
        </h2>
        <h3 className="lg:text-2xl text-xl font-mono text-amber-600 text-center">
            Une recette transmise de generation en generation 
        </h3>
        <p className="px-5 lg:px-80 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolore sunt eius nisi dolorum dignissimos error nobis accusamus maiores, veniam cumque aut eligendi laboriosam assumenda porro libero non! Officiis, animi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fugit vel necessitatibus numquam blanditiis non debitis, similique perferendis quo modi ipsum unde cupiditate, nam deleniti! Vel, optio. Nam, similique doloribus.
        </p>
        <button className="text-xl mt-5 mb-4 border px-5 pt-1 pb-2 transition-all text-amber-300 hover:border-amber-500 hover:text-white">
          Plus d&apos;info
        </button>
    </div>
  )
}
export default Section2