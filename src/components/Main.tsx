import Image from "next/image";
import MainIntro from "./MainIntro";
import MainList from "./MainList";

export default function Main() {
  return (
    <section className="mt-24 mb-12 text-fontColor relative -bottom-5 w-1/2 flex items-start flex-col max-md:w-width90">
      <Image
        src="/memotecon.png"
        alt="memo"
        className="object-contain bg-white rounded-full border-2 border-solid border-mainColor"
        width={144}
        height={144}
      />
      <h1>저를 소개합니다.</h1>
      <div className="w-full flex">
        <MainIntro />
        <MainList />
      </div>
    </section>
  );
}
