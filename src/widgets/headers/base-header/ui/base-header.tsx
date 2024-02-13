import cls from "./styles/base-header.module.scss";
import { Sidebar }                     from "@/widgets/sidebar";
import { BaseNavbar, TypesBaseNavbar } from "@/widgets/navbar/base-navbar";

export const BaseHeader = () => {
  return (
    <header className={cls.Header}>
      <BaseNavbar type={TypesBaseNavbar.HORIZONTAL}/>
      <Sidebar />
    </header>
  );
};
