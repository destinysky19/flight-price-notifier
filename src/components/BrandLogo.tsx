import { Link } from "@tanstack/react-router";
import { Plane } from "lucide-react";

export function BrandLogo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="grid size-8 place-items-center rounded-lg bg-brand-gradient text-primary-foreground shadow-glow">
        <Plane className="size-4" />
      </span>
      <span>Flight Price Notifier</span>
    </Link>
  );
}
