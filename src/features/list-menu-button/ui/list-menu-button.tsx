import { FC, useState } from "react";
import { Button, Icon } from "@gravity-ui/uikit";
import { Bars, Xmark } from "@gravity-ui/icons";

export const ListMenuButton: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function ToggleSidebar() {
    setIsSidebarOpen((event) => event);
  }

  const IconToShow = isSidebarOpen ? Xmark : Bars;

  return (
    <Button onClick={ToggleSidebar}>
      <Icon data={IconToShow} size={18} />
    </Button>
  );
};
