"use client";
import {
  Modal,
  ModalContent,
  ModalOpenTrigger,
  useModal,
} from "@/components/modal/Modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useModal();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Modal>
        <Button onClick={() => setIsOpen(true)}>Outside button</Button>
        <ModalOpenTrigger>
          <Button>Open</Button>
        </ModalOpenTrigger>
        <ModalContent>Hey this is modal content.</ModalContent>
      </Modal>
    </main>
  );
}
