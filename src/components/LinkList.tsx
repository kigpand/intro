import { BsGithub } from "react-icons/bs";
import { SiNotion } from "react-icons/si";

type ListType = {
  text: string;
  link: string;
};

export default function LinkList({ text, link }: ListType) {
  return (
    <a
      href={link}
      target="_blank"
      className="w-24 text-gray-400 flex items-center justify-end mb-5 no-underline hover:text-black hover:underline"
    >
      {text === "Github" ? (
        <BsGithub width={25} height={25} style={{ marginRight: "5px" }} />
      ) : (
        <SiNotion width={25} height={25} style={{ marginRight: "5px" }} />
      )}
      {text}
    </a>
  );
}
