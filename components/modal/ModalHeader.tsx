import { ModalCloseButton } from "./ModalCloseButton";

interface ModalHeaderProps {
  children: React.ReactNode;
}

export function ModalHeader({ children }: ModalHeaderProps) {
  return (
    <div
      className="sticky top-0 p-4 md:p-6 w-full bg-background drag -mb-4 md:-mb-6"
      id="modal-header"
    >
      <ModalCloseButton className="absolute right-5 top-5 md:right-6 md:top-6 -translate-y-1/2 translate-x-1/2" />
      {children}
    </div>
  );
}
