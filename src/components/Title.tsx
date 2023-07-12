type TitleType = {
  title: string;
  imgUrl: string;
};

export default function Title({ title, imgUrl }: TitleType) {
  return (
    <div className=" flex items-center pb-2 w-full border-b border-solid border-b-mainColor">
      <img src={imgUrl} alt="img" className="h-8 object-contain mr-3" />
      <div className="text-xl font-bold">{title}</div>
    </div>
  );
}
