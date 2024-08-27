import { ReactNode } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";

interface DeleteDialogProps {
  children?: ReactNode;
  onDelete: () => void;
}

const ConfirmDialog = ({ children, onDelete }: DeleteDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="bg-transparent border-transparent p-2">
        <div className="bg-background p-4 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-destructive text-2xl pt-2">
              Delete Employee Details
            </DialogTitle>
            <DialogDescription className="pb-4">
              This action cannot be undone. This will permanently delete the
              employee's details and remove from the database.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={onDelete}>
              Continue
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
