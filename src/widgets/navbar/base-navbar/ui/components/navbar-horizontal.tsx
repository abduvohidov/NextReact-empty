import cls                           from "../styles/base-navbar.module.scss";
import { FC }                        from "react";
import NextLink                      from "next/link";
import { ListMenuButton }            from "@/features/list-menu-button";
import { BrandLogoFull }             from "@/shared/ui/logo";
import { Col, Container, Flex, Row } from "@/shared/ui/grid";
import { classNames }                from "@/shared/lib/classNames/classNames";
import { NavLinks }                  from "./nav-links";
import { NavLinkButtons }            from "./nav-link-buttons";

export const NavbarHorizontal: FC = () => {
    return (
        <Container className={classNames([cls.BaseNavbar, cls.Horizontal])}>
            <Row
                className="h-100"
                align={"center"}
                noMargin
            >
                <Col xs={8}>
                    <Flex align={"center"}>
                        <NextLink href={"/"}>
                            <BrandLogoFull width={160} height={15}/>
                        </NextLink>
                        <NavLinks className={classNames([cls.NavLinks])}/>
                    </Flex>
                </Col>
                <Col xs={4}>
                    <Flex
                        justify="end"
                        align="center"
                        className={classNames([cls.ListMenuButton])}
                    >
                        <ListMenuButton/>
                    </Flex>
                    <Flex
                        justify="end"
                        className={classNames([cls.NavLinkButtons])}
                    >
                        <NavLinkButtons/>
                    </Flex>
                </Col>
            </Row>
        </Container>
    );
};
