import m2 from "../assets/hero2/image 194.svg";
import m3 from "../assets/hero2/image 195.svg";
import m4 from "../assets/hero2/image 196.svg";
import m5 from "../assets/hero2/image 197.svg";

const HeroTwo = () => {
  return (
    <div className="bg-[#F4F4F4] mt-[82px] overflow-x-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-[45px]">
          <img src={m2} alt="" className="inline-block mx-4" />
          <img src={m3} alt="" className="inline-block mx-4" />
          <img src={m4} alt="" className="inline-block mx-4" />
          <img src={m5} alt="" className="inline-block mx-4" />
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap overflow-x-hidden">
          <img src={m2} alt="" className="inline-block mx-4" />
          <img src={m3} alt="" className="inline-block mx-4" />
          <img src={m4} alt="" className="inline-block mx-4" />
          <img src={m5} alt="" className="inline-block mx-4" />
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
