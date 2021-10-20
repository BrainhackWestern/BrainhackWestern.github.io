import formatDate from "../../lib/format-date";
import { Tutorial } from "./tutorial";

interface TutorialListProps {
    config: TutorialDay[]
}

function colorIterator() {
    const colors = [
        "#AC4CFF",
        "#951AFF",
        "#7B00E6",
        "#6000B4",
        "#440082",
        "#290050",
        "#100020"
    ]
    let nextIndex = 0
    return {
      next: function() {
        return nextIndex < colors.length ? {
          value: colors[nextIndex++],
          done: false
        } : {
          done: true
        };
      }
    };
  }
  
export const TutorialList = ({ config }: TutorialListProps) => {

    const colors = colorIterator();

    const sides: ("left" | "right")[] = [
        "left",
        "right"
    ]

    return (
        <div id="tutorials" className="content-space container-lg">
            <h2>Tutorials</h2>
            {
                config.map((day) => 
                    <div key={day.day + day.month*10 + day.year*100} className="tutorial-day">
                        <h3 className="tutorial-day-name">{formatDate(new Date(day.year, day.month-1, day.day))}</h3>
                        {
                            // Right now we don't distinguish between morning and
                            // afternoon tutorials, so we merge all the tutorials
                            // together
                            day.tutorialTimes.flatMap(time => 
                                time.options
                            ).map((tutorial, i) => 
                                <Tutorial
                                    key={tutorial.name}
                                    config={tutorial}
                                    color={colors.next().value as string}
                                    side={sides[i % 2]}
                                />
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
