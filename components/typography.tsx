import React from "react";

// Typography components
export const Heading1 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1 className={`text-3xl font-bold mb-2 dark:text-white ${className}`}>
    {children}
  </h1>
);

export const Heading2 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={`text-2xl font-semibold mb-2 dark:text-white ${className}`}>
    {children}
  </h2>
);

export const Paragraph = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={`text-gray-600 dark:text-gray-300 ${className}`}>{children}</p>
);
