import { Button, Modal } from "@mui/material";
import { BaseBox } from "./BaseBox";
import { useState } from "react";

type PropsBaseModal = {
  eventName: string;
  children?: React.ReactNode;
};

export function BaseModal({ eventName, children }: PropsBaseModal) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{eventName}</Button>
      <Modal open={open} onClose={handleClose}>
        <BaseBox>{children}</BaseBox>
      </Modal>
    </div>
  );
}
