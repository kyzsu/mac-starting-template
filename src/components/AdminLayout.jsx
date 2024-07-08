import { Outlet } from "react-router-dom"
import {
  HiArrowRightStartOnRectangle,
  HiChevronUp,
  HiCog8Tooth,
  HiUser,
  HiCog6Tooth,
  HiHome,
  HiMegaphone,
  HiSquare2Stack,
  HiTicket,
} from "react-icons/hi2"

import { SidebarLayout } from "./sidebar-layout"
import { Avatar } from "./avatar"
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "./dropdown"
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from "./navbar"
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "./sidebar"

const AdminLayout = () => {
  return (
    <SidebarLayout
      sidebar={
        <Sidebar>
          <SidebarHeader>{/* Sisipkan Logo */}</SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/admin">
                <HiHome />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/admin/location">
                <HiSquare2Stack />
                <SidebarLabel>Locations</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/admin/job">
                <HiTicket />
                <SidebarLabel>Jobs</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/admin/user-management">
                <HiCog6Tooth />
                <SidebarLabel>User Management</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/admin/employee">
                <HiMegaphone />
                <SidebarLabel>Employees</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex items-center min-w-0 gap-3">
                  <Avatar
                    src="/profile-photo.jpg"
                    className="size-10"
                    square
                    alt=""
                  />
                  <span className="min-w-0">
                    <span className="block font-medium truncate text-sm/5 text-zinc-950 dark:text-white">
                      Erica
                    </span>
                    <span className="block font-normal truncate text-xs/5 text-zinc-500 dark:text-zinc-400">
                      erica@example.com
                    </span>
                  </span>
                </span>
                <HiChevronUp />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href="/admin/my-profile">
                  <HiUser />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/admin/logout">
                  <HiArrowRightStartOnRectangle />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/profile-photo.jpg" square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/settings">
                  <HiCog8Tooth />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <HiArrowRightStartOnRectangle />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
    >
      <Outlet />
    </SidebarLayout>
  )
}

export default AdminLayout
