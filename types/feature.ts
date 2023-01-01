export interface Feature {
    id: string;
    description: string;
    rank: number;
    title: string;
    completion_status: "planned" | "ongoing" | "done" | "cancelled";
}
