export default function ProductDescription({ description }) {
  return (
    <div className="mt-8 border-t pt-8">
      <h2 className="text-lg font-semibold mb-3">Description</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
