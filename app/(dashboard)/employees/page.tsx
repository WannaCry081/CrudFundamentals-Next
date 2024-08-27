"use client";
import { useRouter, usePathname } from "next/navigation";
import { EmployeeList } from "@/components/employee";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Employee() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <article>
      <section className="flex justify-between items-center py-4">
        <span>
          <h1 className="text-2xl font-bold text-indigo-500">Employees</h1>
          <p className="text-sm text-neutral-400">Next Fundamentals</p>
        </span>

        <Button
          className="bg-orange-500 inline-flex rounded-lg size-12 items-center justify-center hover:bg-orange-500/80"
          onClick={() => router.push(`${pathName}/create`)}
        >
          <PlusIcon className="stroke-background" />
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
    </article>
  );
}
