import { ArrowLeftCircle } from "lucide-react"
import Link from "next/link";

type BackButtonProps = {
  text: string;
  link: string;
};

const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link href={link} className="flex items-center text-black hover:text-grey-500 transition-colors duration-200 font-semibold mb-4 p-2 rounded-md">
      <ArrowLeftCircle className="mr-2" />
      {text}
    </Link>
  )
}

export default BackButton