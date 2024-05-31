import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../index.css";

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const cards = [
    {
      name: "Mad Max, Apple",
      description:
        "“ Fresh new designs delivered every 2-3 business days, Monday - Friday. ”",
      img: "../assets/star.svg",
    },
    {
      name: "Mad Max, Apple",
      description:
        "“ Fresh new designs delivered every 2-3 business days, Monday - Friday. ”",
      img: "../assets/star.svg",
    },
    {
      name: "Mad Max, Apple",
      description:
        "“ Fresh new designs delivered every 2-3 business days, Monday - Friday. ”",
      img: "../assets/star.svg",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-[#1E3A2B] w-full h-auto min-h-[872px] mt-[158px] py-8 overflow-hidden">
      <h2 className="font-centra-extrabold text-[36px] tracking-wider text-[#fff] md:text-[92px] md:leading-[105px] mb-8 text-center">
        What Our
        <span className="font-dm-serif italic text-[#BFFF4F] mb-[91px]">
          Clients
        </span>
        Say
      </h2>

      <div className="w-3/4 mx-auto">
        <Slider {...settings}>
          {cards.map((d, index) => (
            <div
              key={index}
              className="bg-[#264836] rounded-lg text-left mx-auto border-0 px-[50px] md:w-[540px] md:h-[347px]"
            >
              <img src={d.img} alt="" className="w-16 h-16 mx-auto mb-4" />
              <p className="font-centra-normal text-white text-[20px] mt-6 md:mt-10">
                {d.description}
              </p>
              <h2 className="text-white text-[24px] font-centra-italic mt-6 md:mt-10">
                {d.name}
              </h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
