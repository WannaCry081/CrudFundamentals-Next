"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirectToEmployees = () => router.push("/employees");

    redirectToEmployees();
  }, [router]);

  return <></>;
}
