import { Tabs, Tab } from "@mui/material";
import { FC } from "react";

interface Props {
  onTabChange: (v: number) => void;
  currentTab: number;
}

export const ModuleTabs: FC<Props> = ({ currentTab, onTabChange }) => {
  return (
    <Tabs value={currentTab} onChange={(_, v) => onTabChange(v)}>
      <Tab label={"Module Content"} value={0} />
      <Tab label={"Case Study"} value={1} />
    </Tabs>
  );
};
