import Image from 'next/image';
import darkMug from '../../public/products/mug-lifestyle-dark-mode.jpeg';
import lightMug from '../../public/products/mug-lifestyle-light-mode.jpeg';

function Product({ image, link, description, onClick = () => {} }) {
  return (
    <a onClick={onClick} href={link}>
      <div className="bg-gray-100 cursor-pointer rounded border relative p-2 group">
        <Image src={image} alt={description} />
        <div className="flex w-full justify-center">
          <button className="w-full py-2 group-hover:bg-teams-purple-light bg-teams-purple text-white rounded-sm">
            Shop now
          </button>
        </div>
      </div>
    </a>
  );
}

export default function Advert() {
  return (
    <section className="p-2">
      <h1 className="text-gray-900 text-xl font-light tracking-tight mb-1">
        Upgrade your coffee game!
      </h1>
      <p className="text-gray-800 font-extralight text-sm mb-6">
        Let your colleagues know you&apos;re ready to caffeinate and conquer the
        day with one of our snazzy new coffee mugs.
      </p>
      <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto sm:gap-8">
        <Product
          link={
            'https://www.redbubble.com/i/mug/Teams-mug-coffee-by-hackerwear/145315400.9Q0AD'
          }
          onClick={() =>
            gtag('event', 'product_click', {
              name: 'Mug - Coffee? (Light mode)',
            })
          }
          image={lightMug}
          description={'Teams coffee mug - light mode'}
        />
        <Product
          link={
            'https://www.redbubble.com/i/mug/Teams-chat-coffee-by-hackerwear/145315129.9Q0AD'
          }
          onClick={() =>
            gtag('event', 'product_click', {
              name: 'Mug - Coffee? (Dark mode)',
            })
          }
          image={darkMug}
          description={'Teams coffee mug - dark mode'}
        />
      </div>
    </section>
  );
}
