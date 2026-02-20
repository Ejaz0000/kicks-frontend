export default function ProductDescription({ description, colorway, bullets = [] }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-[16px] font-bold uppercase tracking-tight text-[#232321]">
          About the product
        </h3>
        {colorway && (
          <p className="text-[16px] text-[#232321]/80 font-medium">
            {colorway}
          </p>
        )}
      </div>

      <div className="space-y-4">
        <p className="text-[16px] text-[#232321]/80 leading-[1.6]">
          {description || "This product is excluded from all promotional discounts and offers."}
        </p>

        {bullets.length > 0 && (
          <ul className="space-y-4">
            {bullets.map((item, i) => (
              <li key={i} className="text-[14px] text-[#232321]/80 flex gap-3 leading-tight">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#232321]/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
