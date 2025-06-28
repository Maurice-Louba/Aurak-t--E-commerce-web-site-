
import { CiSearch } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { GoPeople } from "react-icons/go";

const Navbar = () => {
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
    <div className=" ">
      <div className="mx-auto max-w-[1050px] ">
        <div className="flex py-1  ">
            {/*Nom*/}
            <div className="">
                <p className="font-vogue  text-2xl tracking-[-0.05em] italic text-black">AuraKöté</p>
            </div>
            <div className="flex items-center justify-between mx-8">
                {
                    ElementNav.map((data)=>(
                        <div className=" justify-between ">
                            <p className="mx-10 text-gray-400 hover:text-black cursor-pointer">{data.nom}</p>
                        </div>

                    
                ))}
            </div>
            <div>
                <div className="py-2  flex justify-between items-center">
                    <CiSearch  className="text-black hover:bg-gray-200   bg-gray-300 rounded-full items-center justify-center font-bold"/>
                    <SlBasketLoaded className="text-black hover:bg-gray-200  mx-4   bg-gray-300 rounded-full items-center justify-center font-bold" />
                    <GoPeople className="text-black hover:bg-gray-200   bg-gray-300 rounded-full items-center justify-center font-bold" />
                </div>
            </div>

             
           
        </div>
            <div className=" flex justify-center items-center py-0">
                <span className="h-[1px] w-full bg-gray-400"></span>
            </div>
      </div>
    </div>
  )
}

export default Navbar
