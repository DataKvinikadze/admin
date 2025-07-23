import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type BackButtonProps = {
  text: string;
  link: string;
};

const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link
      href={link}
      className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-200 font-medium mb-6 px-3 py-2 rounded-lg hover:bg-muted"
    >
      <ArrowLeft className="w-5 h-5" />
      <span>{text}</span>
    </Link>
  );
};

export default BackButton;
