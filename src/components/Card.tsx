import { ReactNode } from "react";
import clsx from "clsx";

export default function Card({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const clickable = typeof onClick === "function";
  return (
    <div
      onClick={onClick}
      className={clsx(
        "rounded-2xl border border-border bg-white p-4 shadow-sm",
        clickable && "cursor-pointer hover:shadow-md transition",
        className
      )}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick?.();
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
