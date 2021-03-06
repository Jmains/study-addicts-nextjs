import { FC, useRef, useEffect, useCallback } from "react";
import Portal from "@reach/portal";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { Cross } from "@components/icons";

interface Props {
  className?: string;
  children?: any;
  open?: boolean;
  onClose: () => void;
  onEnter?: () => void | null;
}

const Modal: FC<Props> = ({ children, open, onClose, onEnter = null }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        return onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current);
        window.addEventListener("keydown", handleKey);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      clearAllBodyScrollLocks();
    };
  }, [open, handleKey]);

  return (
    <Portal>
      {open ? (
        <div className="z-50 fixed flex items-center inset-0 justify-center bg-black bg-opacity-60">
          <div
            className="p-10 rounded-md relative focus:outline-none bg-gray-50"
            role="dialog"
            ref={ref}
          >
            <button
              onClick={() => onClose()}
              aria-label="Close panel"
              className="absolute right-0 top-0 m-6 hover:text-gray-500 transition ease-in-out duration-150 focus:outline-none "
            >
              <Cross className="h-6 w-6 fill-current text-black hover:text-lime-600" />
            </button>
            <div className="mt-6">{children}</div>
          </div>
        </div>
      ) : null}
    </Portal>
  );
};

export default Modal;
