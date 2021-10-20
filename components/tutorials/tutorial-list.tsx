import { TutorialDay } from "../../interfaces/tutorial";
import { colorGradient, colorIterator } from "../../lib/color-tools";
import formatDate from "../../lib/format-date";
import { Tutorial } from "./tutorial";

interface TutorialListProps {
    config: TutorialDay[]
}

  
export const TutorialList = ({ config }: TutorialListProps) => {

    // Calculate the total number of tutorials
    const numTutorials = config.flatMap(day => 
        day.tutorialTimes
    ).flatMap(time =>
        time.options
    ).length

    // Generate a gradient of colors between light and dark purple with one
    // color for each gradient. This list is passed to colorIterator, which returns
    // one color each time it's .next() method is called
    const colors = colorIterator(colorGradient("#AC4CFF", "#100020", numTutorials));

    // Left is first so that even tutorials (index % 2) will be on the left side
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
                                    key={tutorial.id}
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
