import { Spinner } from "@chakra-ui/react";

type btnProps = {
  text: string;
  onClick: () => void;
  loading?: boolean;
};
export default function FancyButton({ text, onClick, loading }: btnProps) {
  return (
    <button
      className="w-fit h-fit px-5 py-2 rounded-lg btnBack text-white font-semibold"
      onClick={onClick}
    >
      {loading ? <Spinner /> : text}
    </button>
  );
}
