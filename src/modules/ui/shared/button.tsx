export default function Button({ children, onClick, type = "button", className = "", disabled = false }: { children: React.ReactNode; onClick?: () => void; type?: "button" | "submit" | "reset"; className?: string; disabled?: boolean }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:bg-gray-400 ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}