import { GitHubCalendar } from "react-github-calendar";
import type { Theme } from "./useTheme";


type Props = { theme: Theme };

function GitHubActivity({ theme }: Props) {
  return (
    <section className="w-full mt-2  border border-line p-0 sm:p-8 text-text-body">
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
    </section>
  );
}

export default GitHubActivity;