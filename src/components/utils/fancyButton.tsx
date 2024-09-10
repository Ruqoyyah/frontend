type btnProps = {
  text: string;
  onClick: () => void;
};
export default function FancyButton({ text, onClick }: btnProps) {
  return (
    <button
      className="w-fit h-fit px-5 py-2 rounded-lg btnBack text-white font-semibold"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
