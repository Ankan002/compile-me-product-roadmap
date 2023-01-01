"use client";

import { Feature } from "types/feature";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { Theme } from "types/theme";
import { TimelineCard } from "components/elements";

interface Props {
    features: Array<Feature>;
}

const Timeline = (props: Props) => {
    const { features } = props;

    const currentTheme = useRecoilValue<Theme>(themeAtom);

    return (
        <VerticalTimeline
            lineColor={`${currentTheme === "dark" ? "#F1F2F6" : "#10111A"}`}
            
        >
            {features.map((feature) => (
                <TimelineCard feature={feature} key={feature.id} />
            ))}
        </VerticalTimeline>
    );
};

export default Timeline;
