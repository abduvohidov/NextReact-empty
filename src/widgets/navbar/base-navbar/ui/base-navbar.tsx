import { FC, JSX }          from "react";
import { NavbarVertical } from "@/widgets/navbar/base-navbar/ui/components/navbar-vertical";
import { NavbarHorizontal }   from "@/widgets/navbar/base-navbar/ui/components/navbar-horizontal";

export enum TypesNavbar {
    HORIZONTAL   = "horizontal",
    VERTICAL = "vertical"
}

interface BaseNavbarProps {
    type: TypesNavbar;
}

function printNavbar({type}: BaseNavbarProps): JSX.Element {
    if (type === TypesNavbar.VERTICAL)
        return <NavbarVertical/>
    else
        return <NavbarHorizontal/>
}


export const BaseNavbar: FC<BaseNavbarProps> = (props) => {
    return printNavbar(props)
};
