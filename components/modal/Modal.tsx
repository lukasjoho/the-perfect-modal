import { useWindowSize } from "./hooks/useWindowSize";

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const { windowSize } = useWindowSize();
  return (
    <div
      className="flex flex-col justify-between"
      style={{ maxHeight: windowSize.height! + 20 }}
    >
      {children}
    </div>
  );
}
