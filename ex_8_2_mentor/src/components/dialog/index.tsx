import { ReactNode } from "react";
import { DialogFooter } from "../dialog-footer";
import "./styles.css";

type TDialogProps = {
  content: ReactNode;
  footer: ReactNode;
};

export const Dialog = ({ content, footer }: TDialogProps) => {
  return (
    <>
      <div className="overlay" />
      <div className="dialog">
        {content}
        <DialogFooter>{footer}</DialogFooter>
      </div>
    </>
  );
};