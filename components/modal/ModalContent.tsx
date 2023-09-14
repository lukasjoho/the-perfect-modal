interface ModalContentProps {
  children: React.ReactNode;
}

export function ModalContent({ children }: ModalContentProps) {
  return (
    <div className="px-4 md:px-6 py-4 md:py-6" id="modal-content">
      {children}
    </div>
  );
}
