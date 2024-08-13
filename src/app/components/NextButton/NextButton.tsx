import { useRouter } from "next/navigation";

interface NextButtonProps {
  makeId?: string;
  year?: string;
}

export default function NextButton({ makeId, year }: NextButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (makeId && year) {
      router.push(`/result/${makeId}/${year}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!makeId || !year}
      className={`w-full text-white text-2xl sm:text-4xl font-semibold p-2 rounded-lg transition-colors cursor-pointer ${
        !makeId || !year
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-orange-base hover:bg-opacity-90 focus:bg-opacity-90"
      }`}
    >
      Next
    </button>
  );
}
