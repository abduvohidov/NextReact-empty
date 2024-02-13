import cls                from "../styles/base-navbar.module.scss";
import NextLink           from "next/link";
import { FC, JSX }        from "react";
import { Link }           from "@gravity-ui/uikit";
import { classNames }     from "@/shared/lib/classNames/classNames";
import { usePathname }    from "next/navigation";
import { RowOrFlexProps } from "@/shared/ui/grid/row-or-flex";

const linkList: Array<{ name: string; path: string }> = [
    {name: "Вакансии", path: "/vacancy"},
    {name: "Компании", path: "/company"},
    {name: "Резюме", path: "/resume"},
    {name: "Работодателям", path: "*"},
];

function isCurrentPage(currentPath: string | null, path: string): boolean {
    return currentPath === path;
}

function printNavLinks(
    links: Array<{ name: string; path: string }>
): JSX.Element[] {
    const pathname = usePathname();

    return links.map((link, index) => (
        <li key={index}>
            <NextLink href={link.path} legacyBehavior>
                <Link
                    className={classNames({
                        [cls.ActiveLink]: isCurrentPage(pathname, link.path),
                    })}
                >
                    {link.name}
                </Link>
            </NextLink>
        </li>
    ));
}

export interface RowProps extends Omit<RowOrFlexProps, "type"> {
    noMargin?: boolean;
}

function prepareClass({noMargin, className}: RowProps): string[] {
    const classProps = [];
    classProps.push(cls.NavLinks);

    if (className) {
        classProps.push(className);
    }

    if (noMargin) {
        classProps.push("mx-0");
    }

    return classProps;
}

export const NavLinks: FC<RowProps> = ({noMargin, className}: RowProps) => {
    const options = {
        className: className,
        noMargin: noMargin,
    };
    return (
        <>
            <ul className={classNames(prepareClass(options))}>
                {printNavLinks(linkList)}
            </ul>
        </>
    );
};
