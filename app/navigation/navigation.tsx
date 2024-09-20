import { FaAngleDown } from "react-icons/fa";
import Navitem from "./navitem";

function Navigation() {
  return (
    <nav className="flex w-full">
      <ul className="flex w-full justify-center gap-4">
        <Navitem name={"Home"} dropdown={[]} link={"/"}/>
        <Navitem name={"Notre carte"} dropdown={
          [{
            namedropdown: "Nos Pizza",
            link: "/menu"
          },
          {
            namedropdown: "Nos Plats Italiens",
            link: "/plats"
          },
          {
            namedropdown: "Nos boissons",
            link: "/boissons"
          },
          {
            namedropdown: "Spécialités etrangères",
            link: "/others"
          },
        ]
        }
         link={""}
        />
        <Navitem name={"Custom"} dropdown={[]} link={"/create"}/>
        <Navitem name={"About"} dropdown={[]} link={"/about"}/>
      </ul>
    </nav>
  )
}
export default Navigation