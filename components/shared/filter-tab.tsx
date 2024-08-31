import { Dispatch, SetStateAction } from "react";
import { twJoin } from "tailwind-merge";

interface FilterTabProps {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
  updateSearchParams: (value: string) => void;
}

const FilterTab = ({
  currentTab,
  setCurrentTab,
  updateSearchParams,
}: FilterTabProps) => {
  const TAB_ITEMS = ["All", "Project Manager", "Developer", "QA Tester"];

  const onClick = (value: string) => {
    setCurrentTab(value);
    updateSearchParams(value);
  };

  return (
    <section className="py-2 mb-2 space-x-2 text-sm overflow-auto flex">
      {TAB_ITEMS.map((value, index) => (
        <button
          key={index}
          className={twJoin(
            currentTab === value.toLocaleLowerCase()
              ? "bg-indigo-600"
              : "bg-indigo-500/20",
            "inline-block  px-4 py-1 rounded-lg"
          )}
          onClick={() => onClick(value.toLocaleLowerCase())}
        >
          <p
            className={twJoin(
              currentTab === value.toLocaleLowerCase()
                ? "text-white"
                : "text-black",
              "truncate"
            )}
          >
            {value}
          </p>
        </button>
      ))}
    </section>
  );
};

export default FilterTab;
