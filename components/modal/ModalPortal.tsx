import { useWindowSize } from "@/components/modal/hooks/useWindowSize";
import { DesktopModal } from "./DesktopModal";
import { ModalBackground } from "./ModalBackground";
import MobileModal from "./MobileModal";
import useFixBackground from "@/components/modal/hooks/useFixBackground";

interface ModalPortalProps {
  children: React.ReactNode;
}
export function ModalPortal({ children }: ModalPortalProps) {
  const { windowSize, isMobile, isDesktop } = useWindowSize();
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
