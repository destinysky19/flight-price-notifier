import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrandLogo } from "@/components/BrandLogo";

export function AuthForm({ mode }: { mode: "signin" | "signup" }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isSignup = mode === "signup";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = isSignup
      ? await supabase.auth.signUp({ email, password, options: { emailRedirectTo: window.location.origin } })
      : await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return toast.error(error.message);
    if (!data.session) return toast.success("請到信箱確認帳號 Check your email to confirm.");
    navigate({ to: "/app", replace: true });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-hero px-6">
      <div className="mb-8"><BrandLogo /></div>
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-5 rounded-xl border bg-card p-8 shadow-glow">
        <h1 className="text-2xl font-bold">{isSignup ? "Sign up / 註冊" : "Sign in / 登入"}</h1>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password / 密碼</Label>
          <Input id="password" type="password" required minLength={6} autoComplete={isSignup ? "new-password" : "current-password"} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "..." : isSignup ? "Create account" : "Sign in"}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          {isSignup ? (
            <>Already have an account? <Link to="/signin" className="text-primary-glow hover:underline">Sign in</Link></>
          ) : (
            <>No account yet? <Link to="/signup" className="text-primary-glow hover:underline">Sign up</Link></>
          )}
        </p>
      </form>
    </div>
  );
}
