import Link from "next/link";
import { EmployeeList } from "@/components/employee";

export default function Employee() {
  return (
    <article>
      <section>
        <h1>Employee</h1>
        <Link href="employees/create">Add new Employee</Link>
      </section>

      <section>
        <EmployeeList />
      </section>
    </article>
  );
}
