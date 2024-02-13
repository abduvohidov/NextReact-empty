import cls              from "../styles/base-navbar.module.scss";
import NextLink         from "next/link";
import { classNames }   from "@/shared/lib/classNames/classNames";
import { Button, Link } from "@gravity-ui/uikit";
import { Flex }         from "@/shared/ui/grid";

export const NavLinkButtons = () => {
    return (
        <Flex align="center">
            <NextLink href={"/"} legacyBehavior>
                <Button className={classNames([cls.CreateResumeButton])} view="normal">
                    Создать резюме
                </Button>
            </NextLink>
            <NextLink href={"/"} legacyBehavior>
                <Link className={classNames(["ms-4"])}>Войти</Link>
            </NextLink>
        </Flex>
    );
};
