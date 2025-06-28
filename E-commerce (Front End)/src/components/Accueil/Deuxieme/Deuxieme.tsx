
import img1 from '../../../assets/ImageAccueil/jolie-femme-portant-un-chapeau-posant-sur-fond-noir-removebg-preview.png'
import img2 from '../../../assets/ImageAccueil/beaux-hommes-et-belle-femme-a-l-exterieur-au-soleil-removebg-preview.png'
import img3 from '../../../assets/ImageAccueil/portrait-de-la-belle-femme-elegante-aux-levres-rouges__1_-removebg-preview.png'
import { BsStars } from "react-icons/bs";
const Deuxieme = () => {
  return (
    <div className="bg-[#ececec]  h-[600px]">
        <div className="mx-auto  max-w-[1050px] ">
            <div className="">
                <div className=''>
                    <div>
                        <p className="font-vogue py-15   text-4xl tracking-[-0.05em] italic text-black">Unleash Your Inner<br/> Style Icon</p>
                        <div aos-data="fade-up" className="bg-gradient-to-br hover:bg-gray-800 duration-200 from-black to-gray-600 w-[150px] h-[50px] rounded-[10px] my-[-100px] mx-[140px]">
                            <img data-aos="fade-up" className=' h-[50px] mx-[50px]' src={img1}/>
                        </div>
                        <p data-aos="fade-up" className='py-30 text-gray-500 justify-center'>
                            step into elegence with  our <br/> latest fashion drop---where <br/>fashion meet culture
                        </p>
                        <p className='mx-[250px] my-[-210px] text-gray-300 text-5xl font-vogue'>Unleash Your <br/>Style Icone</p>
                    </div>

                    <div>
                        <div className="bg-gradient-to-br rounded-bl-4xl hover:bg-gray-800 duration-200 from-black to-gray-600 w-[200px] h-[250px] rounded-tl-2xl  rounded-tr-full rounded-br-full  my-[250px]">
                            <div data-aos="fade-up" className='my-[50px] translate-y-5 -translate-x-2' >
                                <img className=' h-[170px]  w-[190px]   ' src={img2}/>
                                <div className='my-[-30px]'>
                                <p data-aos="fade-up" className='text-white text-3xl  mx-15'>40K +</p>
                                <p  data-aos="fade-up" className='text-white mx-10 text-1xl'>Influence people</p>
                                </div>
                           </div>
                        </div>
                    </div>
                    

                </div>
                <div>
                    <div>
                        <div  className="bg-gradient-to-br hover:bg-gray-800 duration-200 rounded-bl-4xl from-black to-gray-600 mx-[550px] -translate-y-[700px] rounded-tr-full rounded-tl-full  w-[350px] h-[450px] roun">
                            <img className='-translate-y-[75px] mx-[-1px]  rounded-bl-4xl  rounded-br-4xl ' src={img3}/>
                            <BsStars data-aos="fade-up"  className='text-gray-600 text-6xl  -translate-y-[500px] mx-[370px]' />

                        </div>
                    </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Deuxieme
