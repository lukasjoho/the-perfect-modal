"use client";
import { cloneElement, createContext, useContext, useState } from "react";
import { Button } from "../ui/button";

interface ModalOpenTriggerProps {
  children: React.ReactElement;
}

const ModalContext = createContext<[boolean, (isOpen: boolean) => void]>([
  false,
  () => {},
]);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </ModalContext.Provider>
  );
}

function callAll(...fns: any) {
  return function (...args: any) {
    fns.forEach((fn: any) => fn?.(...args));
  };
}

export function ModalOpenTrigger({ children: child }: ModalOpenTriggerProps) {
  const [, setIsOpen] = useContext(ModalContext);
  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  });
}

interface ModalContentProps {
  children: React.ReactNode;
}
export function ModalContent({ children }: ModalContentProps) {
  const [isOpen] = useContext(ModalContext);
  return (
    <>
      {isOpen && (
        <ModalBackground>
          <ModalBody>
            <div className="bg-red-500 h-64 w-64">{children}</div>
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
}

interface ModalBackgroundProps {
  children: React.ReactNode;
}

function ModalBackground({ children }: ModalBackgroundProps) {
  const [, setIsOpen] = useContext(ModalContext);
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed top-0 left-0 w-screen h-screen backdrop-blur-2xl bg-opacity-50 z-50 flex items-center"
    >
      {children}
    </div>
  );
}

interface ModalBodyProps {
  children: React.ReactNode;
}
function ModalBody({ children }: ModalBodyProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-black max-w-[50%] mx-auto"
    >
      {children}
    </div>
  );
}
