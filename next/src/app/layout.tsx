import "@/assets/styles/globals.css";
import LayoutMain from "@/layouts/main/LayoutMain";
import { Suspense } from "react";
import Loading from "./loading";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Props = {
  children: React.ReactNode;
};


export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable}`}>
        <LayoutMain navFixed>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </LayoutMain>
      </body>
    </html>
  );
}

const Layout: React.FC<Props> = ({ children }: Props) => {
	return (
		<html lang="fr">
			<body>
				<LayoutMain navFixed>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</LayoutMain>
			</body>
		</html>
	);
};

export default Layout;

