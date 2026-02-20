import Image from '@/components/common/Image';

export default function ProductGallery({ images = [] }) {
  const displayImages = images.length >= 4 ? images.slice(0, 4) : [
    ...images,
    ...Array(4 - images.length).fill(null),
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {displayImages.map((img, i) => (
        <div
          key={i}
          className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group"
        >
          {img ? (
            <Image
              src={img}
              alt={`Product image ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gray-100" />
          )}
        </div>
      ))}
    </div>
  );
}
