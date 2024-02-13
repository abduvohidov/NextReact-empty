import cls                           from "../styles/base-navbar.module.scss";
import { FC }                        from "react";
import NextLink                      from "next/link";
import { BrandLogoFull }             from "@/shared/ui/logo";
import { Col, Container, Flex, Row } from "@/shared/ui/grid";
import { classNames }                from "@/shared/lib/classNames/classNames";
import { NavLinks }                  from "./nav-links";
import { NavLinkButtons }            from "./nav-link-buttons";


export const NavbarVertical: FC = () => {
    return (
        <Container fluid className={classNames([cls.BaseNavbar, cls.Vertical, "h-100"])}>
            <Row
                className="h-100 align-content-between"
            >
                <Col xs={12}>
                    <Flex column align="start">
                        <NextLink href={"/"}>
                            <BrandLogoFull width={160} height={15}/>
                        </NextLink>
                        <NavLinks className={classNames([cls.NavLinks])}/>
                    </Flex>
                </Col>
                <Col xs={12}>
                    <Flex
                        column
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
