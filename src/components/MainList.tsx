import LinkList from "./LinkList";

export default function MainList() {
  return (
    <div className="w-2/5 ml-5 text-xl text-gray-400 flex flex-col items-end">
      <div className="w-full text-end text-sm mb-7 font-bold">
        저는 이렇게 공부해요!
      </div>
      <LinkList text="Github" link="https://github.com/kigpand" />
      <LinkList
        text="Notion"
        link="https://spiffy-random-a92.notion.site/Front-end-Developer-Jihun-Kim-c7aff4da8b6b4e9689dd4870723ebd1a?pvs=4"
      />
    </div>
  );
}
