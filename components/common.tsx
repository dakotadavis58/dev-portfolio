import React from "react";

// List component
export const List = ({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) => (
  <ul
    className={`list-disc list-inside space-y-1 dark:text-gray-300 ${className}`}
  >
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// Button component
export const Button = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    className={`font-bold py-2 px-4 rounded inline-flex items-center ${className}`}
    {...props}
  >
    {children}
  </button>
);
