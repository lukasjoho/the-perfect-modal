import { use, useContext } from "react";
import { ModalContext } from "./ModalContext";
import { motion } from "framer-motion";
import { useWindowSize } from "@/components/modal/hooks/useWindowSize";
import { cn } from "@/lib/utils";

interface ModalBackgroundProps {
  children: React.ReactNode;
}

export function ModalBackground({ children }: ModalBackgroundProps) {
  const { hide } = useContext(ModalContext);
  const { isMobile, isDesktop } = useWindowSize();
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-screen h-[100dvh] flex z-50",
        isDesktop && "px-16"
      )}
    >
      <motion.div
        onClick={() => hide()}
        className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      {children}
    </div>
  );
}
