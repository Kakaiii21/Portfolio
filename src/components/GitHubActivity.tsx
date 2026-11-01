import { GitHubCalendar } from "react-github-calendar";
import {motion} from "motion/react"
import type { Theme } from "./useTheme";


type Props = { theme: Theme };

function GitHubActivity({ theme }: Props) {
  return (
    <motion.section className="w-full mt-2  border border-line p-0 sm:p-8 text-text-body"
      initial={{y:10, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 1}}
    >
        <div className="w-full ">
          <GitHubCalendar 
            username="Kakaiii21"
            colorScheme={theme}
            blockSize={12}
            blockMargin={4}
            fontSize={16}
            showWeekdayLabels
          />
      </div>
    </motion.section>
  );
}

export default GitHubActivity;