import React, { createContext, useContext, useState } from "react";

const UiContext = createContext();

function UiProvider({ children }) {
  const [sidebarIsOpen, setSideBarIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarIsOpen(!sidebarIsOpen);
  };

  return (
    <UiContext.Provider value={{ sidebarIsOpen, toggleSidebar }}>
      {children}
    </UiContext.Provider>
  );
}
const useUiContext = () => useContext(UiContext);

export { useUiContext, UiProvider };
