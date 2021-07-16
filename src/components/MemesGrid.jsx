import MemeCard from './MemeCard';

function MemesGrid({ memes = [], subtitle, title }) {
  return (
    <div className="mt-12 sm:mt-16 p-8 bg-gray-50 text-center rounded-md border border-gray-200">
      <h2 className="text-gray-800 font-semibold text-2xl mb-3">{title}</h2>
      <h3 className="text-gray-500 text-sm mb-8">{subtitle}</h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {memes.map(({
          id, image, slug, title: memeTitle,
        }) => (
          <MemeCard key={id} image={image} slug={slug} title={memeTitle} />
        ))}
      </div>
    </div>
  );
}

export default MemesGrid;
