"use client";
import { useRouter } from "nextjs-toploader/app";
import { EmployeeDetails } from "@/components/employee";
import { BackButton } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon } from "lucide-react";
import { useDestroyEmployeeQuery } from "@/hooks";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const id = params.id;
  const router = useRouter();

  const { destroyEmployee } = useDestroyEmployeeQuery(id);

  return (
    <article className="relative mx-auto min-w-max w-full max-w-2xl">
      <section className="w-full bg-indigo-600 h-40 rounded-2xl p-4 flex justify-between">
        <BackButton
          className="bg-background hover:bg-neutral-100 rounded-full"
          iclassName="stroke-indigo-500"
        />
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full size-12 bg-background hover:bg-neutral-100"
                aria-label="Dropdown menu"
              >
                <EllipsisVerticalIcon className="stroke-indigo-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right">
              <DropdownMenuItem onClick={() => router.push(`${id}/edit`)}>
                Update
              </DropdownMenuItem>
              <DropdownMenuItem
                className="font-medium text-destructive focus:text-destructive/80"
                onClick={() => destroyEmployee()}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      <section className="absolute top-28 flex items-center flex-col w-full">
        <EmployeeDetails id={id} />
      </section>
    </article>
  );
}
