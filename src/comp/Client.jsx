import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../index.css";
import lineMobile from "../assets/cmLine.svg";
import line from "../assets/cLine.svg";

import star from "../assets/star.svg";

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
      img: star,
    },
    {
      name: "Mad Max, Apple",
      description:
        "“ Fresh new designs delivered every 2-3 business days, Monday - Friday. ”",
      img: star,
    },
    {
      name: "Mad Max, Apple",
      description:
        "“ Fresh new designs delivered every 2-3 business days, Monday - Friday. ”",
      img: star,
    },
  ];

  return (
    <div className=" flex flex-col justify-center items-center bg-[#1E3A2B] overflow-hidden pt-[60px] 2xl:pt-[112px] pb-[51px] md:pb-[100px] 2xl:pb-[118px]">
      <h2 className="px-[20px] md:px-[0px] font-centra-extrabold text-[36px] tracking-wider text-[#fff] md:text-[68px] md:leading-[105px] mb-8 text-center">
        What Our
        <span className="relative font-DM text-[#BFFF4F]">
          <span> </span>Clients{" "}
          <span>
            {" "}
            <img
              src={lineMobile}
              alt="line"
              className="block md:hidden absolute left-[20px] bottom-[-3px]"
            />
            <img
              src={line}
              alt="line"
              className="hidden md:block absolute left-[23px] bottom-[2px]"
            />
          </span>
        </span>
        Say
      </h2>

      <div className="w-3/4 mx-auto mt-[40px] 2xl:mt-[91px]">
        <Slider {...settings}>
          {cards.map((d, index) => (
            <div
              key={index}
              className="bg-[#264836] rounded-lg text-left mx-auto border-0 px-[38px] md:px-[60px] md:h-[420px] 2xl:h-[347px]"
            >
              <img
                src={d.img}
                alt=""
                className="w-[110.16px] h-[18px] mt-[48px] md:w-[171px] md:h-[28px]  mb-[28.99px] md:mt-[76px] md:mb[]   "
              />
              <p className="font-centra-normal text-white  text-[16px] md:text-[20px]  mt-[15px] md:mt-[45px]">
                {d.description}
              </p>
              <h2 className="text-white text-[20px] md:text-[24px] font-centra-italic mt-[35px] mb-[35px] md:mt-10 italic">
                {d.name}
              </h2>
            </div>
          ))}
        </Slider>
        <div className="flex items-center justify-center gap-[16px] md:gap-[24px] sm:flex-row overflow-hidden mt-[40px] md:mt-[56px]">
          <button className="font-centra-extrabold text-[20px] w-[168px] md:w-[248px] h-[61px] md:h-[80px] hover:border-black btn btn23 text-lg font-montserrat text-black cursor-pointer transition duration-800 relative overflow-hidden rounded-full">
            View Proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
