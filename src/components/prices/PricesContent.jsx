import PricesIntro from "./PricesIntro";
import PricesBody from './PricesBody';

export default function PricesContent() {
  return (
    <div className='space-above'>
      <PricesIntro />
      <PricesBody />
    </div>
  );
}