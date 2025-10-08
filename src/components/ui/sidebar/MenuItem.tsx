import Link from "next/link";
import { IconType } from "react-icons/lib";

interface Props {
  href: string;
  icon: IconType;
  name: string;
}

export const MenuItem = ({ href, icon: Icon, name }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
    >
      <Icon size={30} />
      <span className="ml-3 text-xl">{name}</span>
    </Link>
  );
};
