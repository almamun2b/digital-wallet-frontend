import HamburgerMenu from "@/assets/icons/HamburgerMenu";
import Logo from "@/assets/icons/Logo";
import UserMenu from "@/components/modules/navbar/UserMenu";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavbarTour } from "@/hooks/useNavbarTour";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { HelpCircle } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router";
import { ModeToggle } from "./ModeToggler";

const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/features", label: "Features", role: "PUBLIC" },
  { href: "/pricing", label: "Pricing", role: "PUBLIC" },
  { href: "/contact-us", label: "Contact Us", role: "PUBLIC" },
  { href: "/faq", label: "FAQ", role: "PUBLIC" },
  // { href: "/admin", label: "Dashboard", role: role.superAdmin },
  // { href: "/admin", label: "Dashboard", role: role.admin },
  // { href: "/user", label: "Dashboard", role: role.user },
];

export default function Navbar() {
  const { data: user } = useUserInfoQuery(undefined);
  const location = useLocation();
  const { resetTour } = useNavbarTour();

  return (
    <header className="border-b px-4 md:px-6 sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                data-tour="mobile-menu"
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <HamburgerMenu />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          asChild
                          className={`py-1.5 w-full ${
                            isActive
                              ? "text-primary font-semibold"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-primary hover:text-primary/90" data-tour="logo">
              <Logo />
            </Link>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden" data-tour="navigation">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <React.Fragment key={index}>
                      {link.role === "PUBLIC" && (
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            asChild
                            className={`py-1.5 font-medium ${
                              isActive
                                ? "text-primary font-semibold"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                          >
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )}
                      {link.role === user?.data?.role && (
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            asChild
                            className={`py-1.5 font-medium ${
                              isActive
                                ? "text-primary font-semibold"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                          >
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )}
                    </React.Fragment>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {/* <InfoMenu /> */}
            <div data-tour="theme-toggle">
              <ModeToggle />
            </div>
            {/* Tour button */}
            <Button
              data-tour="tour-button"
              variant="ghost"
              size="icon"
              onClick={resetTour}
              className="size-8"
              title="Start Tour"
            >
              <HelpCircle className="h-4 w-4" />
            </Button>
          </div>
          <div data-tour="user-menu">
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
