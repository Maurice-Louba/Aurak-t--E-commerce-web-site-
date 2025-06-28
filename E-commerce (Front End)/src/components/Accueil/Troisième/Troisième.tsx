
import imag from '../../../assets/ImageAccueil/petite-fille-s-amuser-et-qui-pose-en-studio.jpg'
import imag1 from '../../../assets/ImageAccueil/charmante-jeune-femme-en-robe-blanche-assise-sur-l-entraineur-portrait-de-femme-bouclee-reveuse-posant-sur-le-canape.jpg'
const Troisième = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto my-[100px]  max-w-[1050px]">
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className=" my-5">
               <div data-aos="fade-up" className="relative h-[200px] w-8/10 rounded-[100px]">
                <img
                className="absolute top-0 left-0 h-[200px] w-full rounded-[100px] object-cover z-0"
                src={imag}
                />
                <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 h-[90px] w-8/10 bg-transparent  shadow-2xl rounded-[100px] z-10 flex">
                    <div className=' h-[70px]  my-3 w-[70px] rounded-full mx-5'>
                        <img className='h-full w-full rounded-full' src={imag1}/>
      
                    </div>
                    <div>
                        <h1 className='text-gray-100  my-3 mx-[10px] font-medium'>Prenium Quality fabric </h1>
                        <p className='text-gray-300'> soft, breatenable et accetaple</p>
                    </div>
                </div>
                </div>

            </div>
            <div  className=''>
                <div>
                    <h1 className=' mx-4 font-vogue text-5xl my-7'> Why you will love it</h1>
                </div>
                <div  data-aos="fade-up" className='my-[-25px]'>
                    <p>
                       Discover fashion that fits your style, your budget, and your lifestyle. Whether you're looking for everyday essentials or standout pieces for special occasions, our collections are designed to make you feel confident and look your best. Quality fabrics, trend-forward designs, and unbeatable prices—all in one place.

                    </p>
                </div>
                <div data-aos="fade-up" className=' my-12  '>
                    <button className='h-[40px] w-[100px] bg-black rounded-md text-white'>View More</button>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Troisième
