import { Link, useLocation } from "@tanstack/react-router";
import {
  HelpCircle,
  History,
  LayoutDashboard,
  LogOut,
  Menu,
  Moon,
  Shield,
  Sun,
  Upload,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import type { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { useAppStore } from "../stores/appStore";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface NavLinkItem {
  href: string;
  label: string;
  icon: ReactNode;
  protected?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard className="w-4 h-4" />,
    protected: true,
  },
  {
    href: "/history",
    label: "Medical History",
    icon: <History className="w-4 h-4" />,
    protected: true,
  },
  {
    href: "/upload",
    label: "Upload",
    icon: <Upload className="w-4 h-4" />,
    protected: true,
  },
];

interface LayoutProps {
  children: ReactNode;
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      data-ocid="header.toggle"
      className="rounded-full text-foreground/70 hover:text-foreground"
    >
      <Sun className="w-4 h-4 rotate-0 scale-100 transition-smooth dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-smooth dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

function NavLink({
  href,
  label,
  icon,
  onClick,
}: NavLinkItem & { onClick?: () => void }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      onClick={onClick}
      data-ocid={`nav.${label.toLowerCase().replace(/\s+/g, "_")}.link`}
      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-smooth
        ${
          isActive
            ? "bg-primary/10 text-primary"
            : "text-foreground/70 hover:text-foreground hover:bg-muted"
        }`}
    >
      {icon}
      {label}
    </Link>
  );
}

export function Layout({ children }: LayoutProps) {
  const { isAuthenticated, logout } = useAuth();
  const { mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useAppStore();

  const visibleLinks = NAV_LINKS.filter(
    (link) => !link.protected || isAuthenticated,
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              data-ocid="header.logo.link"
              className="flex items-center gap-2 shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground tracking-tight">
                HealthVault
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {visibleLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              {isAuthenticated ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  data-ocid="header.logout.button"
                  className="text-foreground/70 hover:text-destructive hover:bg-destructive/10 gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button
                    variant="default"
                    size="sm"
                    data-ocid="header.login.button"
                  >
                    Sign In
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile: theme + hamburger */}
            <div className="flex md:hidden items-center gap-1">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                data-ocid="header.mobile_menu.toggle"
                className="text-foreground/70"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-4 py-3 flex flex-col gap-1">
              {visibleLinks.map((link) => (
                <NavLink
                  key={link.href}
                  {...link}
                  onClick={() => setMobileMenuOpen(false)}
                />
              ))}
              <Separator className="my-2" />
              {isAuthenticated ? (
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  data-ocid="mobile_menu.logout.button"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 transition-smooth"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  data-ocid="mobile_menu.login.link"
                >
                  <Button variant="default" size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-background">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <Shield className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                HealthVault
              </span>
              <span className="text-sm text-muted-foreground">
                — Secure medical records in one place
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link
                to="/contact"
                data-ocid="footer.help.link"
                className="hover:text-foreground transition-smooth flex items-center gap-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Help &amp; Support
              </Link>
              <span>
                © {new Date().getFullYear()}.{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-smooth"
                >
                  Built with caffeine.ai
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
