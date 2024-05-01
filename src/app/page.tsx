import MainHomepage from "@/components/layout-components/main-homepage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <MainHomepage />
    </main>
  );
}
