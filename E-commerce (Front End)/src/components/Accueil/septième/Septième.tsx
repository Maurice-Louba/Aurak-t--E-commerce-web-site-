
import Slider from "react-slick";
import type { CustomArrowProps } from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Septième = () => {
  const TemoinData = [
    {
      id: 1,
      description:
        "The quality exceeded my expectations. Delivery was super quick and packaging was lovely. Highly recommended.",
      name: "Ayesha Rahman",
      city: "London",
      url: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      description:
        "Absolutely love the dress! The fabric is beautiful and I felt amazing wearing it.",
      name: "Emily R.",
      city: "Paris",
      url: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 3,
      description:
        "Quick delivery, great quality, and elegant style. This will not be my last purchase!",
      name: "Nadia B.",
      city: "Marrakech",
      url: "https://randomuser.me/api/portraits/women/52.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  function PrevArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute hover:bg-gray-700 hover:text-white  left-[-40px] top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10"
      >
        <FaArrowLeft />
      </button>
    );
  }

  function NextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute hover:bg-gray-700 hover:text-white right-[-40px] top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10"
      >
        <FaArrowRight className="" />
      </button>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-vogue mb-10">
          What our customer says
        </h2>

        <div className="relative">
          <Slider {...settings}>
            {TemoinData.map((data) => (
              <div key={data.id} className="px-4">
                <div className="bg-gray-100 rounded-xl shadow-md p-6 min-h-[280px] flex flex-col items-center justify-center text-center">
                  <img
                    src={data.url}
                    alt={data.name}
                    className="w-16 h-16 rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-700 text-base mb-4 italic">
                    “{data.description}”
                  </p>
                  <h3 className="font-semibold text-md">{data.name}</h3>
                  <p className="text-sm text-gray-500">{data.city}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Septième;
