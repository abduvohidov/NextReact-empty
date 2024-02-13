import cls                from "./styles/sidebar.module.scss";
import { classNames }     from "@/shared/lib/classNames/classNames";
import { BaseNavbar }  from "@/widgets/navbar/base-navbar";
import { TypesNavbar } from "@/widgets/navbar/base-navbar/ui/base-navbar";

export const Sidebar = () => {
  return (
      <div className={classNames([cls.Sidebar, "d-lg-none"])}>
          <BaseNavbar type={TypesNavbar.VERTICAL} />
      </div>
  );
};
