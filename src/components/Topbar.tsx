import type { Theme } from "./useTheme";
import { MdLightMode, MdDarkMode } from "react-icons/md";
type TopbarProps = {
  theme: Theme;
  toggle: () => void;
};

function Topbar({ theme, toggle }: TopbarProps) {

  return (
    <div className="border flex border-line justify-between px-3 lg:px-10 text-text-body font-roboto items-center h-20">
        <div className="flex">
            <p className="text-center font-emblema text-md lg:text-2xl ">Casey</p> 
            <p className="text-center text-[#39D353] font-emblema text-md lg:text-2xl ">.dev</p> 
        </div>
        <div className=" flex gap-5 lg:gap-10 text-sm justify-center items-center lg:text-lg font-bold  ">
            <a href="#projects" className="hover:cursor-pointer text-center hover:text-green-500">Projects</a>
            <a href="#contact" className="hover:cursor-pointer text-center hover:text-green-500">Contact</a>
            <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex hover:text-green-500 items-center gap-2 rounded-lg border border-line px-4 py-2 text-heading hover:cursor-pointer"
            >
            {theme === "dark" ? (
                <>
                <MdLightMode size={18} />
                Light
                </>
            ) : (
                <>
                <MdDarkMode size={18} />
                Dark
                </>
            )}
            </button>
        </div>
    </div>
  )
}

export default Topbar