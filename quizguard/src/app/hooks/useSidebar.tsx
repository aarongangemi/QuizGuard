import { useState } from 'react';

function useSidebar() {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleDrawerOpen,
    handleDrawerClose
  };
}

export default useSidebar;
