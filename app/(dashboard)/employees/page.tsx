"use client";
import { useRouter } from "next/navigation";
import { EmployeeList } from "@/components/employee";
import { FilterIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlertDialog } from "@/components/shared";

export default function Employee() {
  const router = useRouter();

  return (
    <article className="relative">
      <section className="flex justify-between items-center py-4">
        <span>
          <h1 className="text-2xl font-bold text-indigo-500">Employees</h1>
          <p className="text-sm text-neutral-400">Next Fundamentals</p>
        </span>

        <Button className="bg-orange-500 inline-flex rounded-lg size-12 items-center justify-center hover:bg-orange-500/80">
          <FilterIcon className="stroke-white" />
        </Button>
      </section>

      <section className="py-2 mb-2 space-x-2 text-sm">
        <span className="inline-block bg-indigo-500 px-4 py-1 rounded-lg">
          <p className="text-white">All</p>
        </span>
        <span className="inline-block bg-indigo-500/10 px-4 py-1 rounded-lg">
          <p className="text-black">Favorites</p>
        </span>
        <span className="inline-block bg-indigo-500/10 px-4 py-1 rounded-lg">
          <p className="text-black">Talented</p>
        </span>
      </section>

      <section>
        <EmployeeList />
      </section>

      <section className="fixed bottom-5 right-5">
        <Button
          className="bg-indigo-500 size-14 rounded-full inline-flex items-center justify-center shadow-md hover:bg-indigo-500/80"
          onClick={() => router.push("employees/create")}
        >
          <PlusIcon className="stroke-white size-8" />
        </Button>
      </section>
    </article>
  );
}
