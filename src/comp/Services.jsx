import sass from "../assets/services/sass.svg";
import webApp from "../assets/services/webApp.svg";
import webDev from "../assets/services/webDev.svg";
const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[80px] md:mt-[150px] overflow-hidden ">
      <div>
        <h2 className="font-centra-extrabold text-[36px] tracking-wider	   md:font-centra-extrabold md:text-[92px] md:leading-[105px] text-[#1E3A2B]">
          Our
          <span className=" font-dm-serif italic ">Awesome</span>
          services
        </h2>
      </div>

      <div className="md:grid grid-cols-3 gap-[229px] mt-[20px] md:mt-[123px]">
        <div className="  flex flex-col justify-center items-center">
          <img
            src={webApp}
            alt=""
            style={{ display: "block" }}
            className=" mt-0 md:mt-[40px]"
          />
          <h1
            style={{ display: "block" }}
            className="font-centra-extrabold text-[20px] md:text-[38px]"
          >
            Web & App Design
          </h1>
          <p
            style={{ display: "block" }}
            className="font-centra-normal text-[16px]  mt-0 md:text-[24px] text-center mb-[40px]"
          >
            Fresh new designs delivered <br /> every 2-3 business days, <br />
            Monday - Friday.
          </p>
        </div>
        <div className="  flex flex-col justify-center items-center">
          <img
            src={sass}
            alt=""
            style={{ display: "block" }}
            className=" mt-0 md:mt-[40px]"
          />
          <h1
            style={{ display: "block" }}
            className="font-centra-extrabold text-[20px] md:text-[38px]"
          >
            SaaS Design
          </h1>
          <p
            style={{ display: "block" }}
            className="font-centra-normal text-[16px]  mt-0 md:text-[24px] text-center mb-[40px]"
          >
            Fresh new designs delivered <br /> every 2-3 business days, <br />
            Monday - Friday.
          </p>
        </div>
        <div className="  flex flex-col justify-center items-center">
          <img src={webDev} alt="" style={{ display: "block" }} />
          <h1
            style={{ display: "block" }}
            className="font-centra-extrabold text-[20px] md:text-[38px]"
          >
            Web Development
          </h1>
          <p
            style={{ display: "block" }}
            className="font-centra-normal text-[16px]  mt-0 md:text-[24px] text-center mb-[40px]"
          >
            Fresh new designs delivered <br /> every 2-3 business days, <br />
            Monday - Friday.
          </p>
        </div>
      </div>

      <button className="  mt-[96px] button-hover-effect border font-centra-extrabold border-black text-[20px]  rounded-full relative  overflow-hidden  px-[56px] py-[27px] text-black transition-all before:absolute before:left-0 before:bottom-0 before:right-0 before:h-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:h-full">
        <span className="relative z-10">Book a call</span>
      </button>
    </div>
  );
};

export default Services;
