import logo from "../assets/Sawm Logo.svg";
import "../index.css";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="flex justify-center items-center gap-3 mt-[75px] mx-auto">
        <img src={logo} alt="" className="w-[83px] h-[83px]" />
        <h1 className="text-4xl font-centra-extrabold italic text-[54px] text-[#1E3A2B]">
          Swam
        </h1>
      </section>
      <div className="text-center py-10">
        <h2 className="text-4xl font-centra-extrabold text-[92px] leading-[105px] text-[#1E3A2B]">
          We design to{" "}
          <span className="text-gradient-delight font-dm-serif italic ">
            Delight
          </span>
          <br />
          and{" "}
          <span className="text-gradient-engage  font-dm-serif italic">
            Engage
          </span>{" "}
          users
        </h2>

        <h2 className="font-centra-normal text-[##52685C] text-[20px] mt-[56px]">
          We're on a mission to elevate businesses through designs
        </h2>
      </div>
    </div>
  );
};

export default Hero;
