import { useState, useRef, useCallback, type DragEvent, type ChangeEvent } from "react";

interface FileUploadProps {
  label?: string;
  accept?: string;
  error?: string;
  hint?: string;
  maxSizeMB?: number;
  onFileSelect?: (file: File | null) => void;
}

export function FileUpload({
  label,
  accept = ".pdf,.jpg,.jpeg,.png",
  error,
  hint,
  maxSizeMB = 5,
  onFileSelect,
}: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File | null) => {
      if (file && file.size > maxSizeMB * 1024 * 1024) {
        return;
      }
      setSelectedFile(file);
      onFileSelect?.(file);
    },
    [maxSizeMB, onFileSelect],
  );

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragActive(false);
      const file = e.dataTransfer.files[0] || null;
      handleFile(file);
    },
    [handleFile],
  );

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      handleFile(file);
    },
    [handleFile],
  );

  const removeFile = useCallback(() => {
    setSelectedFile(null);
    onFileSelect?.(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [onFileSelect]);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-body-sm font-medium text-brand-ink mb-1.5">
          {label}
        </label>
      )}

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
        className={`rounded-lg border border-dashed p-8 text-center cursor-pointer transition-all duration-150 ${
          isDragActive
            ? "border-brand-primary bg-brand-primary/5"
            : error
              ? "border-brand-error bg-brand-error/5"
              : "border-brand-hairline bg-brand-surface-soft hover:border-brand-muted-soft"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleChange}
          className="hidden"
          aria-label={label || "Upload file"}
        />

        {selectedFile ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-left">
              <FileIcon className="text-brand-muted-soft" />
              <div>
                <p className="text-body-sm font-medium text-brand-ink">{selectedFile.name}</p>
                <p className="text-caption text-brand-muted-soft">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              className="text-brand-muted-soft hover:text-brand-error transition-colors"
              aria-label="Remove file"
            >
              <XIcon />
            </button>
          </div>
        ) : (
          <>
            <UploadIcon className="mx-auto text-brand-muted-soft mb-3" />
            <p className="text-body-sm text-brand-body">
              <span className="font-medium text-brand-primary">Click to upload</span> or drag and drop
            </p>
            <p className="text-caption text-brand-muted-soft mt-1">
              PDF, JPG, PNG up to {maxSizeMB}MB
            </p>
          </>
        )}
      </div>

      {error && (
        <p className="mt-1.5 text-caption text-brand-error" role="alert">{error}</p>
      )}
      {!error && hint && (
        <p className="mt-1.5 text-caption text-brand-muted-soft">{hint}</p>
      )}
    </div>
  );
}

function FileIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function UploadIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
