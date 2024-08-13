import { Item } from "@/types";

interface FilterProps {
  filterItems: Item[];
  onSelect: (selectedId: string) => void;
}

export default function Filter({ filterItems, onSelect }: FilterProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;

    onSelect(selectedId);
  };

  return (
    <select
      onChange={handleChange}
      className="rounded-lg w-full p-2 shadow-base"
      defaultValue=""
    >
      <option value="" disabled>
        Select an option
      </option>
      {filterItems?.map((item: Item) => (
        <option key={item.id} value={item.id}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
