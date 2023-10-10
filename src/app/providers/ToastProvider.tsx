import * as React from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { ReactComponent as Success } from "../assets/icons/success.svg";
import { ReactComponent as InfoError } from "../assets/icons/info-filled-error.svg";

export type ToastVariant = "success" | "error";

interface ToastContextType {
  showToast: (title: string, subTitle: string, variant: ToastVariant) => void;
}

export const ToastContext = React.createContext<ToastContextType>({
  showToast: (_, __, ___) => {},
});
ToastContext.displayName = "ToastContext";

export default function ToastProvider(props: React.PropsWithChildren<any>) {
  const showToast = (
    title: string,
    subTitle: string,
    varaint: ToastVariant
  ) => {
    const message = (
      <div>
        {title && <p>{title}</p>}
        {subTitle && <p tw="text-[14px]">{subTitle}</p>}
      </div>
    );

    if (varaint === "success") {
      toast.success(message, { icon: Success });
    } else if (varaint === "error") {
      toast.error(message, {
        icon: <InfoError className="icon-error" />,
      });
    } else {
      toast(message);
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastContainer hideProgressBar />
      {props.children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const { showToast } = React.useContext(ToastContext);

  return showToast;
}
