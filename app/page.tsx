import { ThemeToggleBtn } from "components";
import { Header } from "components/elements";
import { getProgressData } from "helpers";

export default async function Home() {
    const progressDataResponse = await getProgressData();
    const featuresProgressData = progressDataResponse.data;

    console.log(featuresProgressData);
    return (
        <main className="min-h-screen w-full bg-primaryLight dark:bg-primaryDark flex flex-col px-5 py-3">
            <Header title="Product Roadmap" />

            <ThemeToggleBtn />
        </main>
    );
}

export const revalidate = 28800;
