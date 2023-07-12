"use client";

import { IProjectArr } from "@/interface/IProjectArr";
import { projectArr } from "@/utils/data";
import { useState } from "react";
import Title from "./Title";
import ProjectItem from "./ProjectItem";
import ProjectSlider from "./ProjectSlider";

export default function Project() {
  const [isSlider, setIsSlider] = useState<boolean>(false);
  const [selectImgs, setSelectImgs] = useState<string[]>([]);
  const [selectWhy, setSelectWhy] = useState<string[]>([]);

  const onSlider = (imgs: string[], whys: string[]) => {
    setSelectImgs(imgs);
    setSelectWhy(whys);
    setIsSlider(true);
  };

  const unSlider = () => {
    setIsSlider(false);
  };

  return (
    <section className="container">
      <Title title="프로젝트" imgUrl="/notebook.png" />
      <div className="w-full flex justify-around flex-wrap">
        {projectArr.map((item: IProjectArr) => {
          return <ProjectItem {...item} onSlider={onSlider} key={item.title} />;
        })}
      </div>
      {isSlider && (
        <ProjectSlider imgs={selectImgs} why={selectWhy} unSlider={unSlider} />
      )}
    </section>
  );
}
