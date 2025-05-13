import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Section1() {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center relative">
      <div className="absolute w-64 bottom-1/3 left-5">
        <img className="object-fit" src="assets/pate2.png"/>
      </div>
      <div className="w-[320px] h-[460px] lg:w-[950px] lg:h-[400px] relative flex justify-center items-center">
        <Carousel className="w-full h-full bg-slate-50/10 relative">
          <CarouselContent>
            <CarouselItem>
              <div className="lg:h-[400px] h-[460px] p-[20px] relative bg-[url('/assets/slider1.jpg')] bg-no-repeat bg-cover">
                <div className="bg-black/65 absolute h-full lg:w-1/2 flex items-center justify-center flex-col pb-20">
                  <h2 className="text-4xl mt-4 mb-2 text-yellow-400">Happy Hour</h2>
                  <img src="/assets/separator.png" className=""/>
                  <p className="mt-2">Profitez de l'offre du Vendredi !</p>
                  <p className="text-xl text-yellow-400 bg-red-800 px-1 rounded-md mt-5">2 Pizza achetées  1 offerte</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="lg:h-[400px] h-[460px] p-[20px] relative bg-[url('/assets/slider2.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="bg-black/65 absolute h-full lg:w-1/2 flex items-center justify-center flex-col pb-20">
                  <h2 className="text-3xl mt-4 mb-2 text-yellow-400">Des produits frais</h2>
                  <img src="/assets/separator.png" className=""/>
                  <p className="mt-2 w-60 text-center">Goutez aux saveurs italiennes authentiques et variées</p>
                  <p className="mt-2 w-60 text-center text-sm">Issus de nos producteurs locaux</p>
                  <p className="flex items-center mt-2">
                    <img className="w-20" src="/assets/sponsor1.png"/>
                    <img className="w-16 h-16" src="/assets/sponsor2.png"/>
                    <img className="w-20" src="/assets/sponsor3.png"/>
                    <img className="w-16" src="/assets/sponsor4.png"/>
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <img src="/assets/board2.png" className="w-full h-[20px] select-none absolute right-0 -top-0"/>
          <img src="/assets/board2.png" className="w-full h-[20px] select-none absolute right-0 bottom-0"/>
          <img src="/assets/board1.png" className="w-[20px] h-[102%] select-none absolute -top-1"/>
          <img src="/assets/board1.png" className="w-[20px] h-[102%] select-none absolute right-0 -top-1"/>
        </Carousel>
      </div>
      
    </div>
  )
}
export default Section1