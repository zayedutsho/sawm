import behance from "../assets/icon/behance.svg";
import dribble from "../assets/icon/dribble.svg";
import instagram from "../assets/icon/instagram.svg";
import linkedin from "../assets/icon/link.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* <section className="flex justify-between items-center gap-3 mt-[75px] ">
          <img src={logo} alt="" />
          <h1 className="text-4xl  font-centra-italic-bold text-[54px]  text-[#1E3A2B] italic">
            Sawm
          </h1>
        </section> */}
        <div className="text-center py-10">
          <h2 className="font-centra-extrabold text-[36px] leading-[41px]  md:font-centra-extrabold md:text-[92px] md:leading-[105px] text-[#1E3A2B]">
            Ready to build <br />
            something{" "}
            <span className="text-gradient-delight font-dm-serif italic ">
              Exeptoinal?
            </span>
          </h2>

          <h2 className="font-centra-normal text-[#52685C] mt-[56px] text-[20px]">
            We're on a mission to elevate businesses through designs
          </h2>
        </div>

        <div className="flex flex-col  md:gap-[24px] sm:flex-row    ">
          <button className="border rounded-full px-8 py-4 bg-[#BFFF4F] font-centra-extrabold">
            View Proposal
          </button>
          <button className="border-2 border-black rounded-full px-8 py-4 font-centra-extrabold md:mt-0 mt-5">
            Book a Call
          </button>
        </div>

        <div className=" flex flex-row justify-between align-middle gap-[20px] mt-[64px]">
          <img
            src={instagram}
            alt=""
            className="border bottom-1 border-black  rounded-full p-3"
          />
          <img
            src={dribble}
            alt=""
            className="border bottom-1 border-black  rounded-full  p-3"
          />
          <img
            src={behance}
            alt=""
            className="border bottom-1 border-black  rounded-full  p-3"
          />
          <img
            src={linkedin}
            alt=""
            className="border bottom-1 border-black  rounded-full  p-3"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
