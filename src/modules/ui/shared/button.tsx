import Link from "next/link";

export default function Button({
  children,
  onClick,
  href,
  type = "button",
  className = "",
  disabled = false,
  variant = "success",
  fullWidth = true,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: "success" | "cancel" | "delete";
  fullWidth?: boolean;
}) {
  const variantStyles =
    variant === "cancel"
      ? "border border-black bg-transparent text-black disabled:bg-transparent hover:bg-indigo-100"
      : variant === "delete"
        ? "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300"
        : "bg-indigo-500 text-white hover:bg-indigo-600 disabled:bg-gray-400";
  const widthStyles = fullWidth ? "w-full" : "w-fit";
  const styles = `my-2 flex h-10 ${widthStyles} items-center justify-center rounded ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
