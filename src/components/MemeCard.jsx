import Image from 'next/image';
import Link from 'next/link';

function MemeCard({ image = '/', slug, title }) {
  return (
    <Link href={slug}>
      <a>
        <div className="transform-gpu hover:scale-105 hover:shadow-lg transition-all bg-white rounded shadow-md cursor-pointer overflow-hidden">
          <div className="h-40 relative border-b border-gray-100">
            <Image alt={title} layout="fill" objectFit="cover" src={image} />
          </div>
          <h3 className="text-gray-800 text-left text-sm font-normal px-4 py-3 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {title}
          </h3>
        </div>
      </a>
    </Link>
  );
}

export default MemeCard;
