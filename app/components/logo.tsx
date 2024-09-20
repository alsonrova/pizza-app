function Logo() {
  return (
    <div className="flex w-full items-center h-40 flex-col">
        <div className='flex items-center h-10 mb-1'>
            <img className="w-16 translate-x-1" src="/assets/floraldecoration.png"/>
            <p className='text-xs italic'>Since 1956</p>
            <img className="w-16 transform -scale-x-100 -translate-x-1" src="/assets/floraldecoration.png"/>
        </div>
        <h1 className='text-4xl font-mono -translate-y-1'>PIZZA HOUSE</h1>
        <div className='w-40 h-1.5 rounded overflow-hidden flex mt-0.5'>
            <div className='w-1/3 h-full bg-lime-700'></div>
            <div className='w-1/3 h-full bg-slate-50'></div>
            <div className='w-1/3 h-full bg-red-700'></div>
        </div>
    </div>
  )
}
export default Logo