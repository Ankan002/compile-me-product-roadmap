import "./globals.css";
import { RecoilContext, ThemeProvider } from "components/elements";
import { ThemeToggleBtn } from "components";
import "react-vertical-timeline-component/style.min.css";

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
                    <ThemeProvider>
                        {children}
                        <ThemeToggleBtn />
                    </ThemeProvider>
                </RecoilContext>
            </body>
        </html>
    );
}
