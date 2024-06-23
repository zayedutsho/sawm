import sass from "../assets/services/sass.svg";
import webApp from "../assets/services/webApp.svg";
import webDev from "../assets/services/webDev.svg";
import line from "../assets/services/line.svg";
import mobileLine from "../assets/services/mobileLine.svg";

const Services = () => {
  return (
    <div className="px-[15px] md:px-[0px] flex flex-col justify-center items-center mt-[80px] mb-[80px] 2xl:mb-[158px] 2xl:mt-[150px] overflow-hidden">
      <div>
        <h2 className="relative text-center font-centra-extrabold text-[36px] tracking-wider	md:font-centra-extrabold md:text-[68px] md:leading-[105px] text-[#1E3A2B]">
          Our
          <span className="font-DM">
            <span> </span>Awesome{" "}
            <span>
              {" "}
              <img
                src={mobileLine}
                alt="line"
                className="block md:hidden absolute left-[150px] bottom-[50px]"
              />
              <img
                src={line}
                alt="line"
                className="hidden md:block absolute md:left-[160px] md:bottom-[4px]"
              />
            </span>
          </span>
          Services
        </h2>
      </div>

      <div className="md:grid grid-cols-3 md:gap-[50px] 2xl:gap-[229px] mt-[20px] md:mt-[100px] 2xl:mt-[123px]">
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
