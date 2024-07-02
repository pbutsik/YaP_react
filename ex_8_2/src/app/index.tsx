import "./styles.css";
import { useState } from "react";
import { HelloWorldDialog } from "../components/hello-world-dialog";
import { Dialog } from "../components/dialog";
import { DialogFooter } from "../components/dialog-footer";

export const App = () => {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className="card">
        <button onClick={() => setOpen(true)}>Открыть модальное окно</button>
      </div>
    );
  }

  // return <HelloWorldDialog open={open} onClose={() => setOpen(false)} />;
  return <HelloWorldDialog open={open}>
    <Dialog
      content = {<p>Привет, мир!</p>}
      footer={
        <DialogFooter>
          <button type="button" onClick={() => setOpen(false)}>
          Закрыть
          </button>
        </DialogFooter>
      }
    >
      
      
    </Dialog>
  </HelloWorldDialog>
};