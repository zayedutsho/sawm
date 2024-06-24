import behance from "../assets/icon/behance.svg";
import dribble from "../assets/icon/dribble.svg";
import instagram from "../assets/icon/instagram.svg";
import linkedin from "../assets/icon/link.svg";
import line from "../assets/footerLine.svg";

const Footer = () => {
  return (
    <>
      <div className="px-[25px] md:px-[0px] flex flex-col justify-center items-center">
        {/* <section className="flex justify-between items-center gap-3 mt-[75px] ">
          <img src={logo} alt="" />
          <h1 className="text-4xl  font-centra-italic-bold text-[54px]  text-[#1E3A2B] italic">
            Sawm
          </h1>
        </section> */}
        <div className="text-center mt-[80px] 2xl:mt-[168px]">
          <h2 className="relative font-centra-extrabold text-[36px] leading-[41px]  md:font-centra-extrabold md:text-[92px] md:leading-[105px] text-[#1E3A2B]">
            Ready to build <br />
            something{" "}
            <span className="text-gradient-delight font-DM">
              Exceptional?&nbsp;
              <img
                src={line}
                alt="line"
                className="hidden left-[550px] bottom-[-10px] md:block absolute z-[-1]"
              />
            </span>
          </h2>

          <h2 className="font-centra-normal text-[#52685C] mt-[20px] md:mt-[56px] mb-[40px] text-[16px] md:text-[20px]">
            We're on a mission to elevate businesses through designs
          </h2>
        </div>
        <div className="flex flex-col  md:gap-[24px] sm:flex-row  overflow-hidden">
          <button className="font-centra-extrabold text-[18px] md:text-[20px] w-[168px] md:w-[248px] h-[61px] md:h-[80px] btn btn23 text-lg font-montserrat text-black cursor-pointer  transition duration-800 relative overflow-hidden rounded-full">
            Book a Call
          </button>
        </div>

        <div className="flex flex-row justify-between align-middle gap-[20px] mt-[20px] md:mt-[64px] mb-[60px] 2xl:mb-[137px]">
          <img
            src={instagram}
            alt=""
            className="cursor-pointer w-[35px] md:w-[58px]"
          />
          <img
            src={dribble}
            alt=""
            className="cursor-pointer w-[35px] md:w-[58px]"
          />
          <img
            src={behance}
            alt=""
            className="cursor-pointer w-[35px] md:w-[58px]"
          />
          <img
            src={linkedin}
            alt=""
            className="cursor-pointer w-[35px] md:w-[58px]"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
