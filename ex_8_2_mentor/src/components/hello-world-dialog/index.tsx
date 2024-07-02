import { Dialog } from "../dialog";

type THelloWorldDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const HelloWorldDialog = ({ open, onClose }: THelloWorldDialogProps) => {
  if (!open) {
    return null;
  }

  return (
    <Dialog
      content={<p>Привет, мир!</p>}
      footer={
        <button type="button" onClick={onClose}>
          Закрыть
        </button>
      }
    />
  );
};