import { Outlet } from "react-router-dom"
import {
  HiArrowRightStartOnRectangle,
  HiChevronDown,
  HiChevronUp,
  HiCog8Tooth,
  HiLightBulb,
  HiPlus,
  HiShieldCheck,
  HiUser,
  HiCog6Tooth,
  HiHome,
  HiInbox,
  HiMagnifyingGlass,
  HiMegaphone,
  HiQuestionMarkCircle,
  HiSparkles,
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
  SidebarHeading,
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
          <SidebarHeader>
            <Dropdown>
              <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                <Avatar src="../assets/react.svg" />
                <SidebarLabel>Tailwind Labs</SidebarLabel>
                <HiChevronDown />
              </DropdownButton>
              <DropdownMenu
                className="min-w-80 lg:min-w-64"
                anchor="bottom start"
              >
                <DropdownItem href="/teams/1/settings">
                  <HiCog8Tooth />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/teams/1">
                  <Avatar slot="icon" src="../assets/react.svg" />
                  <DropdownLabel>Tailwind Labs</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/teams/2">
                  <Avatar
                    slot="icon"
                    initials="WC"
                    className="bg-purple-500 text-white"
                  />
                  <DropdownLabel>Workcation</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/teams/create">
                  <HiPlus />
                  <DropdownLabel>New team&hellip;</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <SidebarSection className="max-lg:hidden">
              <SidebarItem href="/search">
                <HiMagnifyingGlass />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/inbox">
                <HiInbox />
                <SidebarLabel>Inbox</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/">
                <HiHome />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/events">
                <HiSquare2Stack />
                <SidebarLabel>Events</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/orders">
                <HiTicket />
                <SidebarLabel>Orders</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings">
                <HiCog6Tooth />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/broadcasts">
                <HiMegaphone />
                <SidebarLabel>Broadcasts</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSection className="max-lg:hidden">
              <SidebarHeading>Upcoming Events</SidebarHeading>
              <SidebarItem href="/events/1">
                Bear Hug: Live in Concert
              </SidebarItem>
              <SidebarItem href="/events/2">Viking People</SidebarItem>
              <SidebarItem href="/events/3">Six Fingers — DJ Set</SidebarItem>
              <SidebarItem href="/events/4">We All Look The Same</SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/support">
                <HiQuestionMarkCircle />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <HiSparkles />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar
                    src="/profile-photo.jpg"
                    className="size-10"
                    square
                    alt=""
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                      Erica
                    </span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      erica@example.com
                    </span>
                  </span>
                </span>
                <HiChevronUp />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href="/my-profile">
                  <HiUser />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <HiCog8Tooth />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <HiShieldCheck />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <HiLightBulb />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
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
            <NavbarItem href="/search" aria-label="Search">
              <HiMagnifyingGlass />
            </NavbarItem>
            <NavbarItem href="/inbox" aria-label="Inbox">
              <HiInbox />
            </NavbarItem>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/profile-photo.jpg" square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/my-profile">
                  <HiUser />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <HiCog8Tooth />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <HiShieldCheck />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <HiLightBulb />
                  <DropdownLabel>Share feedback</DropdownLabel>
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
