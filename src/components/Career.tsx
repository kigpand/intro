import { ICareerArr } from "@/interface/ICareerArr";
import { careerArr } from "@/utils/data";
import CareerList from "./CareerList";
import Title from "./Title";

export default function Career() {
  return (
    <section className="container">
      <Title title="경력(1년 11개월)" imgUrl="/career.png" />
      <ul className="list-none p-0">
        {careerArr.map((item: ICareerArr) => {
          return <CareerList {...item} key={item.company} />;
        })}
      </ul>
    </section>
  );
}
