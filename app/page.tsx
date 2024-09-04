"use client";
import { useEffect } from "react";
import { useRouter } from "nextjs-toploader/app";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/employees");
  }, [router]);

  return null;
}
