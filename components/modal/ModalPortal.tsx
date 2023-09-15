import { useWindowSize } from "@/components/modal/hooks/useWindowSize";
import { DesktopModal } from "./DesktopModal";
import { ModalBackground } from "./ModalBackground";
import MobileModal from "./MobileModal";
import useFixBackground from "@/components/modal/hooks/useFixBackground";
import { useCallback, useContext, useEffect } from "react";
import { ModalContext } from "./ModalContext";

interface ModalPortalProps {
  children: React.ReactNode;
}
export function ModalPortal({ children }: ModalPortalProps) {
  const { windowSize, isMobile, isDesktop } = useWindowSize();
  const { isOpen, hide } = useContext(ModalContext);
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      hide();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  return (
    <>
      <ModalBackground>
        {isMobile && (
          <MobileModal windowSize={windowSize}>{children}</MobileModal>
        )}
        {isDesktop && <DesktopModal>{children}</DesktopModal>}
      </ModalBackground>
    </>
  );
}
