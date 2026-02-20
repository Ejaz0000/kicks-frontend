export default function ProductDescription({ description, colorway, bullets = [] }) {
  return (
    <div className="mt-6">
      <h3 className="text-xs font-bold uppercase tracking-wider mb-2">About the product</h3>
      {colorway && <p className="text-sm text-gray-500 mb-2">{colorway}</p>}
      <p className="text-sm text-gray-600 leading-relaxed mb-3">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-1">
          {bullets.map((item, i) => (
            <li key={i} className="text-sm text-gray-600 flex gap-2">
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
