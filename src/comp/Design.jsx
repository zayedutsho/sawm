import one from "../assets/design/one.svg";
import three from "../assets/design/three.svg";
import two from "../assets/design/two.svg";
const Design = () => {
  const works = [
    { id: 1, imageUrl: one, title: "Work 1" },
    { id: 2, imageUrl: two, title: "Work 2" },
    { id: 3, imageUrl: three, title: "Work 3" },
    { id: 4, imageUrl: one, title: "Work 4" },
    { id: 5, imageUrl: one, title: "Work 5" },
    { id: 6, imageUrl: one, title: "Work 6" },
  ];
  return (
    <div className="flex flex-col justify-center items-center bg-white  mt-[158px] mb-[116px] py-8 overflow-hidden">
      <h2 className="font-centra-extrabold text-[36px] tracking-wider text-[#1E3A2B] md:text-[68px] md:leading-[105px] mb-8 text-center leading-[ -1.36px]">
        Our
        <span className="font-dm-serif italic text-[#1E3A2B] mb-[91px]">
          Design
        </span>
        Works
      </h2>
      <div className="flex justify-center items-center  py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[36.93px]">
          {works.map((work) => (
            <div key={work.id} className="overflow-hidden">
              <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
