"use client";

import { Modal } from "@/components/modal";
import { ModalContent } from "@/components/modal/ModalContent";
import { ModalFooter } from "@/components/modal/ModalFooter";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { ModalTitle } from "@/components/modal/ModalTitle";
import { useModal } from "@/components/modal/useModal";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { show, isOpen } = useModal();
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-between p-24">
      <Button onClick={() => show(<MyModal />)}>Outside button</Button>
    </main>
  );
}

const MyModal = () => {
  return (
    <Modal>
      <ModalHeader>
        <ModalTitle>Create team</ModalTitle>
      </ModalHeader>
      <ModalContent>
        <img
          src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"
          className="w-full"
          alt=""
        />
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
        <p>anjkdasjkadsjkadskjdskalj</p>
      </ModalContent>
      <ModalFooter>
        <Button>Submit</Button>
      </ModalFooter>
    </Modal>
  );
};
