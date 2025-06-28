import { FaPlay } from "react-icons/fa6";
import img1 from '../../../assets/Cinquième/photo-nouveau.jpg'
import img2 from '../../../assets/Cinquième/elegant-jeune-homme-arrangeant-la-veste.jpg'
import img3 from '../../../assets/Cinquième/vue-de-face-homme-souriant-posant-dans-des-vetements-formels.jpg'
import img4 from '../../../assets/Cinquième/jeune-homme-avec-les-mains-dans-les-poches-de-son-pantalon.jpg'
const Cinquième = () => {
  return (
    <div>
        <div className="mx-auto max-w-[1050px] py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div data-aos='fade-up' className=" h-[200px]  w-[450px] rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-full my-15">
                    <img className='h-[200px] w-[450px] rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-full -z-8' src={img1}/>
                    <FaPlay className="text-white my-[-100px] mx-[230px]" />
                </div>
            <div className="">
                <div className="">
                    <h1 className="font-vogue text-4xl">Experience The Dress Beyond Photos</h1>
                </div>
                <div className="my-2">
                    <p>Experience the dress beyond photos — feel the elegance in every detail, every stitch. Our virtual showcase lets you explore the flow, fit, and fabric as if you're right there. More than just images, it's a glimpse into how confidence looks on you.</p>
                </div>
                <div className="items-center justify-center flex ">
                    <button className="h-[40px] w-[100px] transform hover:scale-110 bg-black rounded-md text-white">View more</button>
                </div>
                <div className="grid grid-cols-2 my-10  sm:grid-cols-3">
                    <div data-aos='zoom-in' className="h-[100px]  w-6/10 rounded-2xl border  border-gray-500">
                        <img className="h-[95px] my-0.5 mx-0.5   w-[100px] rounded-2xl" src={img2}/>

                    </div>
                    <div data-aos='zoom-in' className="h-[100px]  w-6/10 rounded-2xl border  border-gray-500">
                        <img className="h-[95px] my-0.5 mx-0.5   w-[100px] rounded-2xl" src={img3}/>

                    </div>
                    <div data-aos='zoom-in' className="h-[100px]  w-6/10 rounded-2xl border  border-gray-500">
                        <img className="h-[95px] my-0.5 mx-0.5   w-[100px] rounded-2xl" src={img4}/>

                    </div>

                </div>
                
                

            </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Cinquième
