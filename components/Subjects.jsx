import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  computer,
  c,
  dsa,
  database,
  ml,
  process,
  sde,
  terminal,
  os,
} from "@/assets";

const Subjects = () => {
  const SubjectsData = [
    {
      name: "computer",
      image: computer,
    },
    {
      name: "c",
      image: c,
    },
    {
      name: "dsa",
      image: dsa,
    },
    {
      name: "database",
      image: database,
    },
    {
      name: "ml",
      image: ml,
    },
    {
      name: "process",
      image: process,
    },
    {
      name: "sde",
      image: sde,
    },
    {
      name: "terminal",
      image: terminal,
    },
    {
      name: "os",
      image: os,
    },
  ];

  return (
    <section id="partners" className="my-16 py-8 ">
      <Marquee
        pauseOnHover={true}
        direction="right"
        speed="100"
        gradient="false"
      >
        {SubjectsData.map((partner, index) => {
          return (
            <div className=" mx-8 my-2 p-1 shadow-md" key={index}>
              <Image src={partner.image} alt={partner.name} width={50} />
            </div>
          );
        })}
      </Marquee>
    </section>
  );
};

export default Subjects;
