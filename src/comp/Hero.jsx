import behance from "../assets/icon/behance.svg";
import dribble from "../assets/icon/dribble.svg";
import instagram from "../assets/icon/instagram.svg";
import linkedin from "../assets/icon/link.svg";
import logo from "../assets/logo.svg";
import line from "../assets/footerLine.svg";
import "../index.css";

const Hero = () => {
  return (
    <div className="px-[25px] md:px-[0px] flex flex-col justify-center items-center">
      <section className=" items-center gap-3 mt-[70px] md:mt-[75px] mb-[70px] md:mb-[86px]">
        <img src={logo} alt="" />
      </section>
      <div className="text-center">
        <h2 className="relative font-centra-extrabold text-[36px] leading-[41px]  md:font-centra-extrabold md:text-[92px] md:leading-[105px] text-[#1E3A2B]">
          We design to{" "}
          <span className="text-gradient-delight font-dm-serif italic ">
            Delight
            <img
              src={line}
              alt="line"
              className="w-[202px] hidden md:block absolute md:left-[650px] md:bottom-[80px] z-[-1]"
            />
          </span>
          <br />
          and{" "}
          <span className="text-gradient-engage  font-dm-serif italic">
            Engage
          </span>{" "}
          users
        </h2>
        <h2 className="font-centra-normal text-[#52685C] mt-[20px] md:mt-[56px] mb-[40px] text-[20px]">
          We're on a mission to elevate businesses through designs
        </h2>
      </div>

      <div className="flex gap-[16px] md:gap-[24px] sm:flex-row overflow-hidden">
        <button className="font-centra-extrabold text-[20px] w-[168px] md:w-[248px] h-[61px] md:h-[80px] btn btn23 text-lg font-montserrat text-black cursor-pointer transition duration-800 relative overflow-hidden rounded-full">
          View Proposal
        </button>
        <button className="font-centra-extrabold text-[20px] w-[168px] md:w-[248px] h-[61px] md:h-[80px] btn btn2 border border-[#1E3A2B] bg-none text-lg font-montserrat text-black cursor-pointer transition duration-800 relative overflow-hidden rounded-full">
          Book a Call
        </button>
      </div>

      <div className="flex flex-row justify-between align-middle gap-[20px] mt-[20px] md:mt-[64px] mb-[40px] md:mb-[82px]">
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
  );
};

export default Hero;
