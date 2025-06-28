import { useState } from 'react';
import {  useNavigate } from 'react-router'
const Quatrième = () => {
    const ButtonData=[
        {
            id:1,
            text:'All',
            url:'/All',
        },
        {
            id:2,
            text:'Maxi Dress',
            url:'/MaxiDress',
        },
                {
            id:3,
            text:'Wrap Dress',
            url:'',
        },
                {
            id:4,
            text:'Midi Dress',
            url:'',
        },
        {
            id:5,
            text:'Shirt Dress',
            url:'#',
        },
        {
            id:6,
            text:'Slip Dress',
            url:'#',
        },
        {
            id:7,
            text:'Evening Gown',
            url:'#',
        },
]
const navigate = useNavigate();
const [selectedId, setSelectedId] = useState<number | null>(null);
  const handleClick = (id: number, url: string) => {
    setSelectedId(id);
    if (url) navigate(url);
  };
  return (
    <div className="bg-[#ececec] h-[250px]">
      <div className="mx-auto  max-w-[1050px]">
        <div className="items-center  justify-center flex">
            <h1 className="font-vogue  absolute my-4 text-4xl"> Discover the style that </h1>
             <h2 className="font-vogue py-2.5 translate-y-2  mx-[-250px] text-4xl"><br/>  speak to you</h2>

        </div>
        <div className="flex items-center my-10 justify-between ">
            
            {
                ButtonData.map((data)=>(

                    <div key={data.id}  className={`w-[120px] flex rounded-bl-full rounded-br-full rounded-tr-full rounded-tl-full border items-center justify-center cursor-pointer transition 
                ${
                  selectedId === data.id
                    ? 'bg-gray-400 '
                    : 'bg-none hover:bg-gray-300'
                }`} onClick={() => handleClick(data.id, data.url)}>
                        <button>{data.text}</button>
                    </div>
            ))}
            

        </div>




      </div>
    </div>
  )
}

export default Quatrième
