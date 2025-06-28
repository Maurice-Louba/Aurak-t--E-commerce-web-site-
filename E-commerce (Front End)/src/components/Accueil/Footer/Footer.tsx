
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
const Footer = () => {
        const ElementNav=[
        {
            id:1,
            nom:"Home",
            href:"#",
        },
                {
            id:2,
            nom:"Products",
            href:"#",
        },
                {
            id:3,
            nom:"Brand Story",
            href:"#",
        },
                {
            id:4,
            nom:"Testimonials",
            href:"#",
        },
                {
            id:5,
            nom:"Contact",
            href:"#",
        },
    ]



  return (
    <div className="bg-black my-[-60px]">
        <div className="max-w-[1050px] my-15 h-[250px] mx-auto">
            <div>
            <div className="flex justify-between items-center">
                    <div className="my-7">
                        <p className="font-vogue  text-2xl tracking-[-0.05em] italic text-white">AuraKöté</p>
                    </div>
                <div className="flex items-center justify-between ">
                {
                    ElementNav.map((data)=>(
                        <div className=" justify-between ">
                            <p className="mx-3 text-white hover:text-gray-400 cursor-pointer">{data.nom}</p>
                        </div>

                    
                ))}
                </div>

                </div>
                <div className="w-full h-[0.5px] bg-white">

                </div>
                <div className="flex justify-between items-center">
                    <div className="my-8">
                        <p className="text-white">2025 @MauriceLouba, All right reserved</p>
                    </div>
                    <div className="flex">
                        <p className="text-white mx-[20px]">Privacy policy</p>
                        <div className="my-1 flex">
                            <FaFacebook  className="text-white"/>
                            <BsInstagram className="text-white mx-2" />
                            <a href="https://www.linkedin.com/feed/"><GrLinkedin className="text-white mx-2" /></a>
                        </div>
                    </div>

                </div>


            </div>

        </div>
      
    </div>
  )
}

export default Footer
