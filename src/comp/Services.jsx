const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h2 className="font-centra-extrabold text-[68px] tracking-wider	 leading-[41px]  md:font-centra-extrabold md:text-[92px] md:leading-[105px] text-[#1E3A2B]">
          Our
          <span className=" font-dm-serif italic ">Awesome</span>
          services
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <img src="" alt="" />
          <h1></h1>
          <p></p>
        </div>
        <div>
          {" "}
          <img src="" alt="" />
          <h1></h1>
          <p></p>
        </div>

        <div>
          {" "}
          <img src="" alt="" />
          <h1></h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Services;
