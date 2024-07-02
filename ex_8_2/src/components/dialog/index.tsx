import { ReactNode } from "react";
import { DialogFooter } from "../dialog-footer";
import "./styles.css";

// type TDialogProps = {
//   open: boolean;
//   onClose: () => void;
//   content: ReactNode;
// };

// export const Dialog = ({ open, onClose, content }: TDialogProps) => {
//   return open ? (
//     <>
//       <div className="overlay" />
//       <div className="dialog">
//         {content}
//         <DialogFooter onClose={onClose} />
//       </div>
//     </>
//   ) : null;
// };

type TDialogProps = {
  content: ReactNode;
  footer:ReactNode
  
};

export const Dialog = ({ content, footer}: TDialogProps) => {
  return (
    <>
      <div className="overlay" />
      <div className="dialog">
          {content}
          {footer}
      </div>
    </>
  ) 
};

