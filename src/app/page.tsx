import DCSummary from "@/app/components/DCSummary";
import MarketSummary from "@/app/components/MarketSummary";

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
