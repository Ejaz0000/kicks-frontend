import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SectionTitle({ title, buttonText, link, className }) {
  return (
    <div
      className={cn(
        "flex flex-row items-center md:items-end justify-between gap-1 md:gap-0 mb-12",
        className,
      )}
    >
      <h2 className="text-2xl md:text-[74px] text-(--dark-gray) font-medium md:font-semibold tracking-tight leading-tight max-w-[200px] md:max-w-2xl">
        {title}
      </h2>
     

      <Link
        className="bg-(--blue-primary) hover:bg-blue-700 text-white font-semibold px-4 py-3 md:px-8 md:py-[14px] rounded-lg transition-colors duration-200 text-sm md:mb-3 block text-center whitespace-nowrap"
        href={link}
      >
        {buttonText}
      </Link>
    </div>
  );
}
