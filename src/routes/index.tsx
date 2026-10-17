import { createFileRoute, Link } from "@tanstack/react-router";
import { Radar, BellRing, CircleSlash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/BrandLogo";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flight Price Notifier — 機票降價通知" },
      { name: "description", content: "設定航線與目標價，機票降價就通知你。Set a route and a target price — we email you when the fare drops." },
      { property: "og:title", content: "Flight Price Notifier — 機票降價通知" },
      { property: "og:description", content: "Set a route and a target price — we email you when the fare drops." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Radar, title: "盯緊熱門航線 (Always-on route watching)", body: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。" },
  { icon: BellRing, title: "達標自動通知 (Target-price email alerts)", body: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。" },
  { icon: CircleSlash, title: "隨時取消 (Cancel anytime)", body: "月訂閱制，不想用隨時停，沒有綁約。" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <BrandLogo />
        <Button asChild>
          <Link to="/signin">Sign in / 登入</Link>
        </Button>
      </header>

      <section className="relative bg-hero">
        <div className="mx-auto max-w-4xl px-6 pb-24 pt-20 text-center sm:pt-28">
          <FadeIn>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              <span className="text-gradient">Flight Price Notifier</span>
            </h1>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="mt-6 text-2xl font-semibold sm:text-3xl">設定航線與目標價，機票降價就通知你</p>
            <p className="mt-3 text-lg text-muted-foreground">Set a route and a target price — we email you when the fare drops.</p>
          </FadeIn>
          <FadeIn delay={240} className="mt-10 flex justify-center gap-3">
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/signup">免費註冊 Get started</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 120}>
              <div className="h-full rounded-xl border bg-card p-6 transition-colors hover:border-primary/50">
                <span className="grid size-11 place-items-center rounded-lg bg-accent text-primary-glow">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© 2026 Flight Price Notifier</footer>
    </div>
  );
}
