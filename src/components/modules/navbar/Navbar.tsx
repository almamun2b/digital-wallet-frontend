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
import { cn } from "@/lib/utils";

const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/features", label: "Features", role: "PUBLIC" },
  { href: "/pricing", label: "Pricing", role: "PUBLIC" },
  { href: "/contact-us", label: "Contact Us", role: "PUBLIC" },
  { href: "/faq", label: "FAQ", role: "PUBLIC" },
];

export default function Navbar() {
  const { data: user } = useUserInfoQuery(undefined);
  const location = useLocation();
  const { resetTour } = useNavbarTour();

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      isScrolled ? "glass-effect py-2 shadow-sm" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-6 lg:px-12 flex h-auto items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-10">
          <Link to="/" className="group flex items-center gap-2" data-tour="logo">
            <div className="transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
              <Logo />
            </div>
          </Link>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden md:flex" data-tour="navigation">
            <NavigationMenuList className="gap-1">
              {navigationLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                const isPublic = link.role === "PUBLIC";
                const isUserRole = link.role === user?.data?.role;

                if (!isPublic && !isUserRole) return null;

                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors nav-link-hover",
                        isActive
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Link to={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2 mr-2">
            <div data-tour="theme-toggle" className="hover:scale-110 transition-transform">
              <ModeToggle />
            </div>
            <Button
              data-tour="tour-button"
              variant="ghost"
              size="icon"
              onClick={resetTour}
              className="size-9 rounded-full hover:bg-primary/10 hover:text-primary transition-all active:scale-90"
              title="Start Tour"
            >
              <HelpCircle className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>

          <div className="hidden sm:block border-l pl-4 dark:border-white/10">
            <div data-tour="user-menu">
              <UserMenu />
            </div>
          </div>

          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                data-tour="mobile-menu"
                className="group size-9 md:hidden rounded-full transition-all active:scale-90"
                variant="outline"
                size="icon"
              >
                <HamburgerMenu />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-56 mt-2 p-2 glass-effect border-none shadow-xl md:hidden">
              <div className="flex flex-col gap-1">
                {navigationLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={index}
                      to={link.href}
                      className={cn(
                        "px-4 py-3 rounded-lg text-sm transition-all",
                        isActive
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
