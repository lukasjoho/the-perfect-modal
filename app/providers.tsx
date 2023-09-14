"use client";

import { ModalProvider } from "@/components/modal/ModalProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}
