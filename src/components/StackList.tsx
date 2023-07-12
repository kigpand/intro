type ListType = {
  title: string;
  text: string;
};

export default function StackList({ title, text }: ListType) {
  return (
    <li className="mb-5">
      <div className="text-lg font-bold">{title}</div>
      <div className="mt-1 text-sm">- {text}</div>
    </li>
  );
}
