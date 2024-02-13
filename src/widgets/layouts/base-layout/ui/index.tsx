import { BaseHeader }        from "@/widgets/headers/base-header";
import { PropsWithChildren } from "react";

export const BaseLayout = ({children}: PropsWithChildren) => {
	return (
		<>
			<BaseHeader/>
			<main className="main">{children}</main>
		</>
	)
}
