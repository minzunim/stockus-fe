import DCSummary from "@/app/components/DCSummary";
import MarketSummary from "@/app/components/MarketSummary";
import RedditSummary from "./components/RedditSummary";
import Floating from "./components/Floating";

export default function Home() {
  return (
    <div>
      <section>
        <MarketSummary></MarketSummary>
        <DCSummary></DCSummary>
        <RedditSummary></RedditSummary>
        <Floating></Floating>
      </section>
    </div>
  );
}
