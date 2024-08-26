import { ReactNode } from "react";
import { RocketIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { twJoin } from "tailwind-merge";
import toast from "react-hot-toast";

interface BaseAlertDialogProps {
  children?: ReactNode;
  variant?: "default" | "destructive" | null;
  title: string;
  message: string;
}

const BaseAlertDialog = ({
  children,
  variant,
  title,
  message,
}: BaseAlertDialogProps) => {
  toast.custom((t) => {
    return (
      <Alert
        variant={variant}
        className={twJoin(
          "bg-background min-w-min w-full max-w-96",
          variant ?? "text-green-600 border-green-600",
          t.visible ? "animate-enter" : "animate-leave"
        )}
      >
        {children}
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    );
  });
};

const AlertDialog = {
  Success: (message: string) => {
    BaseAlertDialog({
      title: "Success",
      message,
      children: <RocketIcon color="#059669" />,
    });
  },
  Error: (message: string) => {
    BaseAlertDialog({
      variant: "destructive",
      title: "Error",
      message,
      children: <ExclamationTriangleIcon />,
    });
  },
};

export default AlertDialog;
