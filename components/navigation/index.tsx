import { cn } from "@/lib/utils";
import { navigations } from "@/constants/navigations";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="mb-6">
      <ul className="flex justify-center items-center px-2 py-4 gap-4 shadow text-black">
        {navigations.map((nav) => (
          <li key={nav.link} className={cn(nav.type === 'Home' && 'font-bold text-3xl')}>
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
