import { Dialog } from "../dialog";
import { ReactNode } from "react";

// type THelloWorldDialogProps = {
//   open: boolean;
//   onClose: () => void;
// };

// export const HelloWorldDialog = ({ open, onClose }: THelloWorldDialogProps) => {
//   return <Dialog open={open} onClose={onClose} content={<p>Привет, мир!</p>} />;
// };


type THelloWorldDialogProps = {
  open: boolean;
  children: ReactNode;
  
};

export const HelloWorldDialog = ({children, open}:THelloWorldDialogProps) => {
  return open ? (
        <>
          {children}
          
        </>
      ) : null;
};