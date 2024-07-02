import { useState } from "react";

type isOpens = {
    onOpen?:() => void;
    onClose?: () => void;
}

type TUseDisclosure = {
    isOpen: boolean
    toggle: () => void;
    open: () => void;
    close: () => void;
}

export function useDisclosure(initialState:boolean = false, {onOpen, onClose}:isOpens = {}): TUseDisclosure {
    const [isOpen, setIsOpen] = useState(initialState);

    function close() {
        if (onOpen) {
        setIsOpen(false);
        }
    }

    function open() {
        if (onClose) {
        setIsOpen(true);
        }
    }

    const toggle = () => {
        isOpen ? close() : open();
    };

    return {
        isOpen,
        toggle,
        close,
        open,
    };
};
