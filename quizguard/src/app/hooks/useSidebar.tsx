"use client";

import { useEffect, useState } from "react";
import { Tabs } from "../components/Tabs";

function useSidebar() {
  const [open, setOpen] = useState(true);
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.Modules);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const isQuizSelected = window.location.pathname.endsWith("quiz-cover");
    if (isQuizSelected) {
      setCurrentTab(Tabs.TakeQuiz);
    }
    if (!isQuizSelected) {
      setCurrentTab(Tabs.Modules);
    }
  }, [window.location.pathname]);

  return {
    open,
    handleDrawerOpen,
    handleDrawerClose,
    currentTab,
  };
}

export default useSidebar;
