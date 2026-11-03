export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "success",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: "success" | "cancel" | "delete";
}) {
  const variantStyles =
    variant === "cancel"
      ? "border border-black bg-transparent text-black disabled:bg-transparent hover:bg-indigo-100"
      : variant === "delete"
        ? "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300"
        : "bg-indigo-500 text-white hover:bg-indigo-600 disabled:bg-gray-400";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex h-10 w-full items-center justify-center rounded my-2 ${variantStyles} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
