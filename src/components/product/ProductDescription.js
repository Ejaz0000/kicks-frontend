export default function ProductDescription({ description, colorway, bullets = [] }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="text-base font-semibold uppercase tracking-tight text-(--dark-gray)">
          ABOUT THE PRODUCT
        </h4>
        {colorway && (
          <p className="sub-text text-base text-(--dark-gray) font-normal">
            {colorway}
          </p>
        )}
      </div>

      <div className="space-y-4 font-normal">
        <p className="text-base text-(--dark-gray) leading-[1.6]">
          {description || "This product is excluded from all promotional discounts and offers."}
        </p>

        {bullets.length > 0 && (
          <ul className="space-y-1 list-disc pl-4">
            {bullets.map((item, i) => (
              <li key={i} className="text-base text-(--dark-gray) leading-[1.6]">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
