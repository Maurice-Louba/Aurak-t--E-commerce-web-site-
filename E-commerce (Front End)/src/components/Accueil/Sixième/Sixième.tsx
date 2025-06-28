
import im1 from '../../../assets/Sixième/portrait-d-homme-elegant-a-la-recherche-de-suite.jpg'
import img2 from '../../../assets/Sixième/portrait-jeune-beau-male.jpg'
import img3 from '../../../assets/Sixième/mohamad-khosravi-Uw3OfKz2J-0-unsplash.jpg'
const Sixième = () => {
  return (
    <div className="bg-[#ececec]">
      <div className="max-w-[1050px] h-[550px] mx-auto">
        <div>
            <div className="flex  py-15 justify-between">
                 <h1 className="font-vogue text-4xl">New Arrival</h1>
                 <button className="h-[40px] w-[100px] transform hover:scale-105 bg-black rounded-md text-white">View more</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <div  className=" h-[280px] mx-10 w-[260px] rounded-tl-full rounded-tr-full">
                    <img data-aos='fade-up' className='h-[280px] w-[260px] rounded-tl-full rounded-tr-full' src={im1}/>
                    <p className='font-medium'>Elegent Midnight Maxi Dress</p>
                    <p className='font-medium'>$99.9</p>

                </div>
                <div  className=" h-[280px] mx-10 w-[260px] rounded-tl-full rounded-tr-full">
                    <img data-aos='fade-up' className='h-[280px] w-[260px] rounded-tl-full rounded-tr-full' src={img2}/>
                    <p className='font-medium'>Elegent Midnight Maxi Dress</p>
                    <p className='font-medium'>$99.9</p>

                </div>
                <div  className=" h-[280px] mx-10 w-[260px] rounded-tl-full rounded-tr-full">
                    <img data-aos='fade-up' className='h-[280px] w-[260px] rounded-tl-full rounded-tr-full' src={img3}/>
                    <p className='font-medium'>Elegent Midnight Maxi Dress</p>
                    <p className='font-medium'>$99.9</p>

                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Sixième
