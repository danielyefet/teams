import Image from 'next/image';
import banner from '../../public/banners/audible.png';

export default function Advert() {
  return (
    <a
      className="flex items-center justify-center"
      href="https://www.amazon.co.uk/hz/audible/mlp?ie=UTF8&actionCode=AMN30DFT1Bk06604291990WX&tag=teamsmemes-21"
      onClick={() => gtag('event', 'banner_click')}
    >
      <Image src={banner} alt="Audible banner" />
    </a>
  );
}
