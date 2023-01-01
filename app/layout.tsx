import "./globals.css";
import { RecoilContext } from "components/elements";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body>
                <RecoilContext>{children}</RecoilContext>
            </body>
        </html>
    );
}
