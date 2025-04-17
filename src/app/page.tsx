import DCSummary from "@/app/components/DCSummary";
import MarketSummary from "@/app/components/MarketSummary";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <MarketSummary></MarketSummary>
        <DCSummary></DCSummary>
      </section>
    </div>
  );
}
