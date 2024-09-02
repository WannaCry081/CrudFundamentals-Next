import Link from "next/link";
import { twJoin } from "tailwind-merge";

interface FilterTabProps {
  selectedPosition: string;
}

const FilterTab = ({ selectedPosition }: FilterTabProps) => {
  const TAB_ITEMS = ["All", "Project Manager", "Developer", "QA Tester"];

  return (
    <section className="py-2 mb-2 space-x-2 text-sm overflow-auto flex">
      {TAB_ITEMS.map((value, index) => (
        <Link
          key={index}
          href={`?${new URLSearchParams({
            position: value.toLowerCase(),
          })}`}
          className={twJoin(
            selectedPosition === value.toLocaleLowerCase()
              ? "bg-indigo-600"
              : "bg-indigo-500/20",
            "inline-block  px-4 py-1 rounded-lg"
          )}
        >
          <p
            className={twJoin(
              selectedPosition === value.toLocaleLowerCase()
                ? "text-white"
                : "text-black",
              "truncate"
            )}
          >
            {value}
          </p>
        </Link>
      ))}
    </section>
  );
};

export default FilterTab;
