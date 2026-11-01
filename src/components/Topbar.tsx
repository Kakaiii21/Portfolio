import type { Theme } from "./useTheme";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import {motion} from "motion/react";
import AnimatedButton from "./AnimatedButton";


type TopbarProps = {
  theme: Theme;
  toggle: () => void;
};

function Topbar({ theme, toggle }: TopbarProps) {

  return (
    <div className="border flex border-line justify-between px-3 lg:px-10 text-text-body font-roboto items-center h-20">
        <motion.div 
            className="flex"        
        >
            <motion.p
                className="text-center font-emblema text-md lg:text-2xl"
                initial={{x:-20, opacity: 0}}
                animate={{x: 0, opacity: 1 }}
                transition={{duration: 1}}    
            >Casey</motion.p> 
            <motion.p 
                className="text-center text-[#39D353] font-emblema text-md lg:text-2xl"
                initial={{y:20,opacity:0}}
                animate={{y: 0 , opacity:1}}
                transition={{duration:1}}
            >.dev</motion.p> 
        </motion.div>
        <motion.div 
            initial={{x:30, opacity:0}}
            animate={{x: 0,opacity:1}}
            transition={{duration: 1}}
            className=" flex gap-5 lg:gap-10 text-sm justify-center items-center lg:text-lg font-bold"
        >
            <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness:200, damping:15 }}
                href="#projects" className="hover:cursor-pointer text-center hover:text-green-500">
            Projects    
            </motion.a>
            <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness:200, damping:15 }}
                href="#contact" className="hover:cursor-pointer text-center hover:text-green-500">Contact</motion.a>
            <AnimatedButton
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
            </AnimatedButton>
        </motion.div>
    </div>
  )
}

export default Topbar