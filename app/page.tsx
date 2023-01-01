import { ThemeToggleBtn } from "components";
import { Header } from "components/elements";

export default function Home() {
    return (
        <main className="min-h-screen w-full bg-primaryLight dark:bg-primaryDark flex flex-col px-5 py-3">
            <Header title="Product Roadmap" />

            <ThemeToggleBtn />
        </main>
    );
}
