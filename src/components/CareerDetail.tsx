import { ICareerDetail } from "@/interface/ICareerArr";
import { colorObj } from "@/utils/color";

type DetailType = {
  link: string;
  details: ICareerDetail[];
};

const CareerDetail = ({ link, details }: DetailType) => {
  return (
    <div className="mb-12 relative w-full text-sm pt-2 pr-5 pb-2 pl-0 animate-down">
      <h3 className="mb-0">주요 업무: </h3>
      {details.map((detail: ICareerDetail, i: number) => {
        return (
          <div className="my-2 mb-8 mx-0" key={i}>
            <div>
              {i + 1}. <strong>{detail.title}</strong>
            </div>
            <div className="mt-2">
              기술 스택:
              {detail.stack.map((stack: string, j: number) => {
                return (
                  <span
                    className="ml-1 p-1 text-white rounded"
                    key={j}
                    style={{ backgroundColor: colorObj[stack] }}
                  >
                    {stack}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="absolute right-2 font-bold no-underline animate-move text-mainColor hover:underline"
      >
        자세한 업무 히스토리 알아보기
      </a>
    </div>
  );
};

export default CareerDetail;
