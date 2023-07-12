import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

type ProjectType = {
  imgs: string[];
  why: string[];
  unSlider: () => void;
};

const SliderComponent = styled(Slider)`
  position: relative;
  width: 600px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    background-color: white;
    width: 100%;
    height: 450px;
    object-fit: contain;
  }

  @media (max-width: 767px) {
    width: 80%;
    height: 300px;

    img {
      width: 400px;
      height: 300px;
    }
  }
`;

export default function ProjectSlider({ imgs, why, unSlider }: ProjectType) {
  return (
    <section className="modal flex-col">
      <SliderComponent>
        {imgs.map((item: string, i: number) => {
          return <img src={item} key={i} alt={item}></img>;
        })}
      </SliderComponent>
      <div className="w-width600px p-3 bg-white max-md:w-4/5">
        <div className="font-bold text-lg flex items-center">
          왜 이 프로젝트를 개발했나요?
          <Image src="/why.png" alt="why" width={30} height={10} />
        </div>
        <div className=" w-full h-lineH bg-gray-200 my-2"></div>
        <ul className="text-sm">
          {why.map((item: string, i: number) => {
            return (
              <li className="mb-2" key={i}>
                {i + 1}. {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="modal-back" onClick={unSlider}></div>
    </section>
  );
}
