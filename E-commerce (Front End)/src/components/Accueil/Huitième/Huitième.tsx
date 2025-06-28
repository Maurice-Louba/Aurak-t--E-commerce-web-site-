import imag from '../../../assets/Huitième/portrait-de-femmes-diverses-d-ages-differents.jpg'
import imag2 from '../../../assets/Huitième/groupe-de-jeunes-positifs-posant-ensemble.jpg'
import { BsStars } from "react-icons/bs";

const Huitième = () => {
  return (
    <div className="bg-[#ececec]">
        <div className="max-w-[1050px] h-full mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className=" my-15">
                    <h1 className="text-4xl font-vogue">Join Our Skincare Community</h1>
                    <div className="my-8">
                    <p>Join our skincare community and take your routine to the next level.
Get expert tips, product recommendations, and real results.
Connect with people who share your passion for healthy, glowing skin.
Start your skincare journey with us today — your best skin is just ahead.</p>
                    </div>
                    <div className="">
                        <button className='h-[40px] transform hover:scale-105 w-[100px] bg-black rounded-md text-white'>Join Us</button>
                    </div>
                </div>
                <div>
                    <div  className="rounded-tl-full rounded-tr-full mx-[180px]  h-[270px] w-[250px] my-15">
                        <img className='rounded-tl-full rounded-tr-full   h-[270px] w-[250px]' src={imag}/>
                        
                        

                    </div>
                    <div className='rounded-tr-full rounded-br-full w-[200px] my-[-180px] mx-[350px] h-[170px]'>
                        <img className='rounded-tr-full rounded-br-full   h-[120px] w-[200px]' src={imag2}/>
                    </div>
                    <BsStars className='text-black text-4xl my-[-300px] mx-[450px] ' />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Huitième
