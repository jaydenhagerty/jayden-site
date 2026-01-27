// app/AnimatedWrapper.tsx (client component)
"use client";

import { usePathname } from "next/navigation";

export default function AnimatedWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return <div key={pathname} className="slide-up-fade">{children}</div>;
}
