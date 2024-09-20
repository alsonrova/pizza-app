import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

interface NavitemProps {
    name: string;
    dropdown: {
      namedropdown: string | null;
      link: string | null;
    }[] | null;
    link: string | null;
  }

function Navitem({name , dropdown,link}: NavitemProps) {
  return (
    <li className="relative flex items-center min-w-32 gap-3 justify-between cursor-pointer group transition-colors">
       {(!dropdown || dropdown.length === 0) ? (
        <div className="italic text-xl hover:text-amber-400"><Link href={link?link:"/"}>{name}</Link></div>
      ) : (
        <>
          <p className="italic text-xl hover:text-amber-400">{name}</p>
          <FaAngleDown className="translate-y-0.5" />
          <div className="w-full absolute bg-zinc-900/80 top-7 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-100">
            <div className="w-full bg-amber-400 h-0.5"></div>
            <ul>
              {dropdown.map((item, index) => (
                <li key={index} className="p-0.5">
                  <Link href={item.link?item.link:"/"} className="hover:text-amber-400">{item.namedropdown}</Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
        
    </li>
  )
}
export default Navitem