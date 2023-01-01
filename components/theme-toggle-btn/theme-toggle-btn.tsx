"use client";

import { themeAtom } from "atoms/theme-atom";
import { useRecoilState } from "recoil";
import { Theme } from "types/theme";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggleBtn = () => {
    const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);

    const onToggleThemePressed = () => {
        if (currentTheme === "light") {
            setCurrentTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setCurrentTheme("light");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            className="absolute w-10 h-10 top-5 right-10 border-2 border-primaryDark dark:border-primaryLight bg-primaryYellow dark:bg-primaryOrange rounded-2xl p-2 flex justify-center items-center shadow-[0_1px_12px_2px_rgba(246,186,61,0.7)] dark:shadow-[0_1px_12px_2px_rgba(252,88,48,0.7)] z-10"
            onClick={onToggleThemePressed}
            aria-label="Toggle Theme"
        >
            {currentTheme === "light" ? (
                <BsFillMoonFill className="text-lg text-primaryDark" />
            ) : (
                <BsFillSunFill className="text-lg text-primaryLight" />
            )}
        </button>
    );
};

export default ThemeToggleBtn;
