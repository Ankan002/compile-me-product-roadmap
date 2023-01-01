"use client";

import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { Theme } from "types/theme";
import { themeAtom } from "atoms";

interface Props {
    children: React.ReactNode;
}

const ThemeProvider = (props: Props) => {
    const { children } = props;

    const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);
    const isMounted = useRef(false);

    useEffect(() => {
        if (window === undefined) return;
        if (isMounted.current) return;

        isMounted.current = true;
        const lastSavedMode = localStorage.getItem("theme");

        if (!lastSavedMode) {
            localStorage.setItem("theme", currentTheme);
            return;
        }

        if (lastSavedMode === "light") {
            setCurrentTheme(lastSavedMode);
        }
    }, []);

    return <div className={`${currentTheme}`}>{children}</div>;
};

export default ThemeProvider;
