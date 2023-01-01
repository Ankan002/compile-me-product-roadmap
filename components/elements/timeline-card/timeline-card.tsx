"use client";

import { Feature } from "types/feature";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { Theme } from "types/theme";

interface Props {
    feature: Feature;
}

const TimelineCard = (props: Props) => {
    const { feature } = props;

    const currentTheme = useRecoilValue<Theme>(themeAtom);

    const colorSet = {
        planned: "#FC5830",
        ongoing: "#F6BA3D",
        done: "#08CD92",
        cancelled: "#D61C4E",
    };

    return (
        <VerticalTimelineElement
            contentStyle={{
                backgroundColor: `${
                    currentTheme === "dark" ? "#10111A" : "#F1F2F6"
                }`,
                boxShadow: "none",
                borderColor: `${colorSet[feature.completion_status]}`,
                borderWidth: 3,
                borderRadius: 10,
            }}
            contentArrowStyle={{
                borderRight: `7px solid ${colorSet[feature.completion_status]}`,
            }}
            iconClassName="border-2 border-primaryDark"
            iconStyle={{
                backgroundColor: `${colorSet[feature.completion_status]}`,
            }}
        >
            <h1 className="text-xl text-primaryDark dark:text-primaryLight tracking-widest">
                {feature.title}
            </h1>

            <p className="text-lg text-primaryDark dark:text-primaryLight font-manrope">
                {feature.description}
            </p>

            <p className="text-lg text-primaryDark dark:text-primaryLight">
                Status:
                <span
                    className="ml-3"
                    style={{
                        color: `${colorSet[feature.completion_status]}`,
                    }}
                >
                    {feature.completion_status.toUpperCase()}
                </span>
            </p>
        </VerticalTimelineElement>
    );
};

export default TimelineCard;
