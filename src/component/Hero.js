import styled from "styled-components";
const Hero = () => {
  return (
    <Section className="container flex justify-between text-white mt-44">
      <div className="w-[40rem]">
        <h3 className="text-2xl pb-2 tracking-wider top-wording">
          So, you want to travel to{" "}
        </h3>
        <h1 className="text-9xl text-home">SPACE</h1>
        <p className="pr-60 text-sm pt-9 leading-loose	">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="pt-14 hover:bg-[#d0d6f976] px-14 py-10 rounded-full ease-in-out duration-300">
        <p className="text-home text-black bg-[white]  text-3xl tracking-wider py-20 px-8 rounded-full">
          EXPLORE
        </p>
      </div>
    </Section>
  );
};

export default Hero;

const Section = styled.div`
  .element {
  }
`;
