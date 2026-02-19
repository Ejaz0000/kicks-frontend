export default function ProductGallery({ images = [] }) {
  return (
    <div className="space-y-4">
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        {/* Main image placeholder */}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <div key={i} className="aspect-square bg-gray-100 rounded-md cursor-pointer" />
        ))}
      </div>
    </div>
  );
}
