type ListType = {
  title: string;
  text: string;
};

export default function PersonalityList({ title, text }: ListType) {
  return (
    <div className="w-full flex items-center mt-4">
      <div className="w-2/5 font-bold flex">
        {title}
        <img src="/star.png" alt="img" className="w-5 h-5" />
      </div>
      <div className="w-4/5 text-sm ml-12">{text}</div>
    </div>
  );
}
