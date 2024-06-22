import sass from "../assets/services/sass.svg";
import webApp from "../assets/services/webApp.svg";
import webDev from "../assets/services/webDev.svg";
import line from "../assets/services/line.svg";
import mobileLine from "../assets/services/mobileLine.svg";

const Services = () => {
  return (
    <div className="px-[15px] md:px-[0px] flex flex-col justify-center items-center mt-[80px] mb-[80px] md:mb-[158px] md:mt-[150px] overflow-hidden">
      <div>
        <h2 className="relative text-center font-centra-extrabold text-[36px] tracking-wider	md:font-centra-extrabold md:text-[92px] md:leading-[105px] text-[#1E3A2B]">
          Our
          <span className="font-dm-serif italic">
            <span> </span>Awesome <span> </span>
          </span>
          <img
            src={line}
            alt="line"
            className="hidden md:block absolute md:left-[250px] md:bottom-[4px] z-[-1]"
          />
          <img
            src={mobileLine}
            alt="line"
            className="md:hidden absolute left-[140px] bottom-[55px] z-[-1]"
          />
          Services
        </h2>
      </div>

      <div className="md:grid grid-cols-3 md:gap-[50px] 2xl:gap-[229px] mt-[20px] md:mt-[123px]">
        <div className=" flex flex-col justify-center items-center">
          <img
            src={webApp}
            alt=""
            style={{ display: "block" }}
            className="mb-[10px] md:mb-[33px]"
          />
          <h1
            style={{ display: "block" }}
            className="font-centra-extrabold text-[20px] md:text-[38px]"
          >
            Web & App Design
          </h1>
          <p
            style={{ display: "block" }}
            className="font-centra-normal text-[16px] md:text-[24px] text-center mt-[10px] md:mt-[32px]"
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
            className="mt-[40px] md:mt-[0px] mb-[10px] md:mb-[33px]"
          />
          <h1
            style={{ display: "block" }}
            className="font-centra-extrabold text-[20px] md:text-[38px]"
          >
            SaaS Design
          </h1>
          <p
            style={{ display: "block" }}
            className="font-centra-normal text-[16px] md:text-[24px] text-center mt-[10px] md:mt-[32px]"
          >
            Fresh new designs delivered <br /> every 2-3 business days, <br />
            Monday - Friday.
          </p>
        </div>
        <div className="  flex flex-col justify-center items-center">
          <img
            src={webDev}
            alt=""
            style={{ display: "block" }}
            className="mt-[40px] md:mt-[0px] mb-[10px] md:mb-[33px]"
          />
          <h1
            style={{ display: "block" }}
            className="font-centra-extrabold text-[20px] md:text-[38px]"
          >
            Web Development
          </h1>
          <p
            style={{ display: "block" }}
            className="font-centra-normal text-[16px] md:text-[24px] text-center mt-[10px] md:mt-[32px]"
          >
            Fresh new designs delivered <br /> every 2-3 business days, <br />
            Monday - Friday.
          </p>
        </div>
      </div>
      <div className="flex gap-[16px] mt-[50px] md:mt-[104px] md:gap-[24px] sm:flex-row overflow-hidden">
        <button className="font-centra-extrabold text-[20px] w-[168px] md:w-[248px] h-[61px] md:h-[80px] btn btn2 border border-[#1E3A2B] bg-none text-lg font-montserrat text-black cursor-pointer transition duration-800 relative overflow-hidden rounded-full">
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default Services;
