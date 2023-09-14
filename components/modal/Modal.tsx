interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  return <div>{children}</div>;
}
