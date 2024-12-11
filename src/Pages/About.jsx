const About = () => {
  const cardData = [
    {
      title: "Innovation",
      content:
        "We embrace innovation as the lifeblood of our company. We continuously seek new ideas, technologies, and approaches to deliver cutting-edge solutions",
    },
    {
      title: "Integrity",
      content:
        "Integrity is the cornerstone of our relationships. We conduct business with honesty, transparency, and ethical conduct, earning the trust and respect of our clients",
    },
    {
      title: "Customer Centricity",
      content:
        "Our customers are at the heart of everything we do. We listen attentively to their needs, collaborate closely to understand their goals",
    },
    {
      title: "Continuous Learning",
      content:
        "We foster a culture of continuous learning and growth. Our team is committed to staying ahead of the curve, expanding our skills and embracing new technologies",
    },
  ];
  return (
    <>
      {/* Transforming Section */}
      <div className="flex items-center justify-center ">
        <div className="w-5/6 h-fit bg-white/60 shadow-2xl ring-1 ring-gray-900/10 rounded-3xl m-2 md:m-3 xl:m-5 flex flex-col items-center ">
          <h1 className="text-white font-normal text-center m-2 p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
            Transforming Grocery Shopping
          </h1>
          <p className="text-justify font-light w-5/6 m-2 p-2 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            unde, quaerat, autem dolores quo veritatis vitae corrupti vel
            repellendus minus, qui culpa. Minima perferendis vero, maxime at
            eligendi ratione tenetur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores unde, quaerat, autem dolores quo veritatis
            vitae corrupti vel repellendus minus, qui culpa. Minima perferendis
            vero, maxime at eligendi ratione tenetur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores unde, quaerat, autem dolores
            quo veritatis vitae corrupti vel repellendus minus, qui culpa.
            Minima perferendis vero, maxime at eligendi ratione tenetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Maiores unde,
            quaerat, autem dolores quo veritatis vitae corrupti vel repellendus
            minus, qui culpa. Minima perferendis vero, maxime at eligendi
            ratione tenetur Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maiores unde, quaerat, autem dolores quo veritatis vitae
            corrupti vel repellendus minus, qui culpa. Minima perferendis vero,
            maxime at eligendi ratione tenetur Lorem{" "}
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="flex items-center justify-center ">
        <div className="w-5/6 h-fit bg-white/60 shadow-2xl ring-1 ring-gray-900/10 rounded-3xl m-2 md:m-3 xl:m-5 flex flex-col items-center ">
          <h1 className="text-white font-normal text-center m-2 p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
            Brief description about the platform
          </h1>
          <p className="text-justify font-light w-5/6 m-2 p-2 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            unde, quaerat, autem dolores quo veritatis vitae corrupti vel
            repellendus minus, qui culpa. Minima perferendis vero, maxime at
            eligendi ratione tenetur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores unde, quaerat, autem dolores quo veritatis
            vitae corrupti vel repellendus minus, qui culpa. Minima perferendis
            vero, maxime at eligendi ratione tenetur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores unde, quaerat, autem dolores
            quo v{" "}
          </p>

          <h1 className="text-white font-normal text-center m-2 p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
            Mission & Vision
          </h1>
          <p className="text-justify font-light w-5/6 m-2 p-2 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            unde, quaerat, autem dolores quo veritatis vitae corrupti vel
            repellendus minus, qui culpa. Minima perferendis vero, maxime at
            eligendi ratione tenetur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores unde, quaerat, autem dolores quo veritatis
            vitae corrupti vel repellendus minus, qui culpa. Minima perferendis
            vero, maxime at eligendi ratione tenetur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores unde, quaerat, autem dolores
            quo v{" "}
          </p>
        </div>
      </div>

      {/*  Core Values */}
      <div>
        <h1 className="text-white font-normal text-center m-2 p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  2xl:text-7xl">
          Core Values
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center m-5 text-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="max-w-[400px] max-h-[700px] w-full relative rounded-3xl bg-white/60 shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 ease-in-out hover:scale-105 z-10"
            >
              <h1 className="uppercase font-medium m-3 lg:m-5 mt-5 text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl text-center leading-none">
                {card.title}
              </h1>
              <p className="text-justify m-6 sm:m-3 md:m-4 sm:mx-8 md:mx-10 text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
