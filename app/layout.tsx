import "./globals.css";
import { RecoilContext, ThemeProvider } from "components/elements";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body>
                <RecoilContext>
                    <ThemeProvider>{children}</ThemeProvider>
                </RecoilContext>
            </body>
        </html>
    );
}
