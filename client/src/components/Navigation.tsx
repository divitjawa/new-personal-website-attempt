import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const routes = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" }
];

export default function Navigation() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/">
            <a className="mr-6 flex items-center space-x-2 font-bold">
              Divit Jawa
            </a>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link key={route.path} href={route.path}>
                <a
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    location === route.path ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {route.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              {routes.map((route) => (
                <Link key={route.path} href={route.path}>
                  <a
                    className={cn(
                      "text-sm font-medium transition-colors",
                      location === route.path ? "text-foreground" : "text-foreground/60"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {route.name}
                  </a>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
