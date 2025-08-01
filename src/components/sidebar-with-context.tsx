import { SidebarProvider } from "../context/SidebarContext";

import Sidebar from "./sidebar";

export default function SidebarWithContext() {
  return (
    <SidebarProvider>
      <Sidebar />
    </SidebarProvider>
  );
}
