"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { EmployeeList } from "@/components/employee";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import FilterTab from "@/components/shared/filter-tab";
import { useCallback, useEffect, useState } from "react";

export default function Employee() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentTab, setCurrentTab] = useState<string>("all");

  useEffect(() => {
    const position = searchParams.get("position") || "all";
    setCurrentTab(position);
  }, [searchParams]);

  const updateSearchParams = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("position", value);
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <article className="sm:min-w-max w-full sm:max-w-2xl mx-auto">
      <section className="flex justify-between items-center py-4">
        <span>
          <h1 className="text-2xl font-bold text-indigo-600">Employees</h1>
          <p className="text-sm text-neutral-600">Next Fundamentals</p>
        </span>

        <Button
          aria-label="Add Employee"
          className="bg-orange-600 inline-flex rounded-lg size-12 items-center justify-center hover:bg-orange-600/90"
          onClick={() => router.push("employees/create")}
        >
          <PlusIcon className="stroke-background" />
        </Button>
      </section>

      <FilterTab
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        updateSearchParams={updateSearchParams}
      />

      <section>
        <EmployeeList filter={currentTab} />
      </section>
    </article>
  );
}
