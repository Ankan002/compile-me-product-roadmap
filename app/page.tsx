"use client"

import { ThemeToggleBtn } from "components";

export default function Home() {
    return (
        <main className="min-h-screen w-full bg-primaryLight dark:bg-primaryDark flex flex-col px-5 py-3 font-fira-code">
            <h1 className="text-3xl text-primaryDark dark:text-primaryLight">
              Hello
            </h1>

            <ThemeToggleBtn />
        </main>
    );
}
