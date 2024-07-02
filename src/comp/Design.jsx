import one from "../assets/design/SVG/SVG/work1.svg";
import ten from "../assets/design/SVG/SVG/work10.svg";
import eleven from "../assets/design/SVG/SVG/work11.svg";
import twelve from "../assets/design/SVG/SVG/work12.svg";
import thirteen from "../assets/design/SVG/SVG/work13.svg";
import fourteen from "../assets/design/SVG/SVG/work14.svg";
import fifteen from "../assets/design/SVG/SVG/work15.svg";
import two from "../assets/design/SVG/SVG/work2.svg";
import three from "../assets/design/SVG/SVG/work3.svg";
import four from "../assets/design/SVG/SVG/work4.svg";
import five from "../assets/design/SVG/SVG/work5.svg";
import six from "../assets/design/SVG/SVG/work6.svg";
import seven from "../assets/design/SVG/SVG/work7.svg";
import eight from "../assets/design/SVG/SVG/work8.svg";
import nine from "../assets/design/SVG/SVG/work9.svg";
import line from "../assets/design/line.svg";
import lineMobile from "../assets/design/lineMobile.svg";

const Design = () => {
  const works = [
    { id: 1, imageUrl: one, title: "Work 1" },
    { id: 2, imageUrl: two, title: "Work 2" },
    { id: 3, imageUrl: three, title: "Work 3" },
    { id: 4, imageUrl: four, title: "Work 4" },
    { id: 5, imageUrl: five, title: "Work 5" },
    { id: 6, imageUrl: six, title: "Work 6" },
    { id: 7, imageUrl: seven, title: "Work 7" },
    { id: 8, imageUrl: eight, title: "Work 8" },
    { id: 9, imageUrl: nine, title: "Work 9" },
    { id: 10, imageUrl: ten, title: "Work 10" },
    { id: 11, imageUrl: eleven, title: "Work 11" },
    { id: 12, imageUrl: twelve, title: "Work 12" },
    { id: 13, imageUrl: thirteen, title: "Work 13" },
    { id: 14, imageUrl: fourteen, title: "Work 14" },
    { id: 15, imageUrl: fifteen, title: "Work 15" },
  ];
  return (
    <div className="px-[25px] md:px-[35px] 2xl:px-[0px] flex flex-col justify-center items-center bg-white my-[80px] 2xl:mt-[150px] 2xl:mb-[170px] overflow-hidden">
      <h2 className="z-[100] relative font-centra-extrabold text-[36px] tracking-wider text-[#1E3A2B] md:text-[68px] md:leading-[105px] md:mb-8 text-center leading-[-1.36px]">
        Our
        <span className="font-DM text-[#1E3A2B] mb-[91px]">
          <span></span> Design <span></span>
        </span>
        <img
          src={line}
          alt="line"
          className="hidden md:block absolute left-[80px] md:left-[150px] md:bottom-[4px] z-[-1]"
        />
        <img
          src={lineMobile}
          alt="line"
          className="md:hidden absolute left-[80px] bottom-[2px] z-[-1]"
        />
        Works
      </h2>
      <div className="flex justify-center items-center py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[17px] md:gap-[36.93px]">
          {works.map((work) => (
            <div key={work.id} className="overflow-hidden">
              <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110 cursor-pointer  border-none rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
