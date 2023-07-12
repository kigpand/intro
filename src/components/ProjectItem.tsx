import { IProjectArr } from "@/interface/IProjectArr";
import { colorObj } from "@/utils/color";

interface IProjectItem extends IProjectArr {
  onSlider: (imgs: string[], whys: string[]) => void;
}

export default function ProjectItem({
  imgUrl,
  title,
  stacks,
  github,
  link,
  why,
  onSlider,
}: IProjectItem) {
  return (
    <div
      className="relative w-width47 rounded-lg overflow-hidden border border-solid border-mainColor mt-5 cursor-pointer hover:scale-105 hover:bg-gray-200 max-md:w-full"
      onClick={() => onSlider(imgUrl, why)}
    >
      <img
        src={imgUrl[0]}
        alt="img"
        className="w-full h-48 border-b border-solid border-b-mainColor"
      />
      <div className="w-full p-3 flex flex-col">
        <div className="font-bold">{title}</div>
        <ul className="list-none p-0 flex flex-wrap text-xs">
          {stacks.map((item: string, i: number) => {
            return (
              <li
                className="text-white mr-3 mt-1 p-1 rounded"
                key={i}
                style={{ backgroundColor: colorObj[item] }}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <a
          href={github}
          className="text-sm no-underline text-gray-600 hover:underline w-24 mt-5 mb-3"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          깃허브 바로가기
        </a>
        <a
          href={link}
          className="text-sm no-underline text-gray-600 hover:underline"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          사이트 바로가기
        </a>
      </div>
    </div>
  );
}
