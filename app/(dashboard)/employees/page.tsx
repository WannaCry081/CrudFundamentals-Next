import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { EmployeeList } from "@/components/employee";
import FilterTab from "@/components/shared/filter-tab";

interface EmployeeProps {
  searchParams: {
    position?: string;
  };
}

export default function Employee({ searchParams }: EmployeeProps) {
  const selectedPosition = (searchParams.position as string) || "all";

  return (
    <article className="sm:min-w-max w-full sm:max-w-2xl mx-auto">
      <section className="flex justify-between items-center py-4">
        <span>
          <h1 className="text-2xl font-bold text-indigo-600">Employees</h1>
          <p className="text-sm text-neutral-600">Next Fundamentals</p>
        </span>

        <Link
          href="/employees/create"
          aria-label="Add Employee"
          className="bg-orange-600 inline-flex rounded-lg size-12 items-center justify-center hover:bg-orange-600/90"
        >
          <PlusIcon className="stroke-background" />
        </Link>
      </section>

      <FilterTab selectedPosition={selectedPosition} />

      <section>
        <EmployeeList selectedPosition={selectedPosition} />
      </section>
    </article>
  );
}
