import React, { useContext, useEffect, useRef, useState } from "react";
import { PanInfo, Variants, motion, useDragControls } from "framer-motion";
import { ModalContext } from "./ModalContext";

interface MobileModalProps {
  children: React.ReactNode;
  windowSize: { width: number | undefined; height: number | undefined };
}

export function MobileModal({ windowSize, children }: MobileModalProps) {
  const { show, hide } = useContext(ModalContext);
  const variants: Variants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
    },
  };

  const constraintsRef = useRef(null);

  const ref = useRef<HTMLDivElement>(null);
  async function handleDragEnd(event: any, info: PanInfo) {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const modalHeight = ref.current?.getBoundingClientRect().height || 0;
    if (offset > modalHeight / 2 || velocity > 500) {
      hide();
    }
  }

  const [allowDrag, setAllowDrag] = useState(true);
  const dragControls = useDragControls();

  const onDragStart = (event: any, info: any) => {
    if (!event.target.classList.contains("drag")) {
      console.log("SHOULD NOT DRAG");

      (dragControls as any).componentControls.forEach((entry: any) => {
        entry.stop(event, info);
      });
    } else {
      console.log("SHOULD DRAG");
      dragControls.start(event);
    }
  };

  return (
    <div>
      {/* <div
        className="bg-red-500 w-full h-8 z-10 absolute top-8"
        onPointerDown={(e: any) => {
          startDrag(e);
        }}
      /> */}
      <motion.div
        ref={ref}
        id="mobile-modal"
        variants={variants}
        initial="hidden"
        animate={"visible"}
        exit="hidden"
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 border border-b-0 rounded-t-lg bg-background overflow-scroll"
        style={{
          maxHeight: windowSize.height! + 20,
          boxShadow: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`,
        }}
        drag="y"
        dragDirectionLock
        // onDragStart={(event: any, info: PanInfo) => {
        //   console.log("ID: ", event.target?.id);
        //   if (event.target?.id == "modal-header") {
        //     console.log("INSIDE");
        //     (dragControls as any).componentControls.forEach((entry: any) => {
        //       entry.stop(event, info);
        //     });
        //   }
        // }}
        dragListener={false}
        dragControls={dragControls}
        // onPointerDown={onDragStart}
        // onDragEnd={handleDragEnd}
        dragElastic={{ top: 0, bottom: 1 }}
        dragConstraints={{ top: 0, bottom: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default MobileModal;

const MobileHandleBar = () => (
  <div className="bg-muted-foreground/50 h-1 w-9 rounded-full mx-auto sticky top-2 z-10 -mb-2" />
);
