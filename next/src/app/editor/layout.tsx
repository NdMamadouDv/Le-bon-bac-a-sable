import LayoutEditor from "@/layouts/editor/LayoutEditor";
import EditorProvider from "@/context/editorContext";

export const metadata = {
	title: "Editez votre site 😁",
	description:
		"Modifiez votre futur site selon vos envies grâce à notre éditeur gratuit !",
};

type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
	return (
		<EditorProvider>
			<LayoutEditor>{children}</LayoutEditor>
		</EditorProvider>
	);
};

export default Layout;
