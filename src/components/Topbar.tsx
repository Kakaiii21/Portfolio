import type { Theme } from "./useTheme";

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
        <div className=" flex gap-5 lg:gap-10 text-sm lg:text-lg font-bold  ">
            <button className="hover:cursor-pointer">Projects</button>
            <button className="hover:cursor-pointer">Contact</button>
            <button
                onClick={toggle}
                className="rounded-lg border border-line hover:cursor-pointer px-4 py-2 text-heading"
            >
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
        </div>
    </div>
  )
}

export default Topbar