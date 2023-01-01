import { Timeline } from "components";
import { Header } from "components/elements";
import { getProgressData } from "helpers";
import { Feature } from "types/feature";

export default async function Home() {
    const progressDataResponse = await getProgressData();
    const featuresProgressData = progressDataResponse.data as Array<Feature>;

    return (
        <main className="min-h-screen w-full bg-primaryLight dark:bg-primaryDark flex flex-col px-5 py-3">
            <Header title="Product Roadmap" />

            <Timeline features={featuresProgressData} />
        </main>
    );
}

export const revalidate = 28800;
