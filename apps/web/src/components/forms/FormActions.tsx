import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

interface FormActionsProps {
  submitLabel: string;
  loading?: boolean;
  onCancel?: () => void;
  cancelLabel?: string;
  children?: ReactNode;
}

export function FormActions({
  submitLabel,
  loading,
  onCancel,
  cancelLabel = "Cancel",
  children,
}: FormActionsProps) {
  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
      {onCancel ? (
        <Button type="button" variant="secondary" onClick={onCancel} disabled={loading}>
          {cancelLabel}
        </Button>
      ) : (
        <span />
      )}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
        {children}
        <Button type="submit" loading={loading}>
          {submitLabel}
        </Button>
      </div>
    </div>
  );
}