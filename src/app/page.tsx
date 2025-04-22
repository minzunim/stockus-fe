import DCSummary from "@/app/components/DCSummary";
import MarketSummary from "@/app/components/MarketSummary";
import RedditSummary from "./components/RedditSummary";

export default function Home() {
  return (
    <div>
      <section>
        <MarketSummary></MarketSummary>
        <DCSummary></DCSummary>
        <RedditSummary></RedditSummary>
      </section>
    </div>
  );
}
