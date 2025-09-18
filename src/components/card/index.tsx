import React from 'react';

interface CardPropsBase extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

type CardProps = Readonly<CardPropsBase>;

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      data-testid="card-calculator"
      className={`bg-(--background-calculator) shadow-(--shadow-calculator) rounded-2xl ${className ?? ''}`}
      {...props}
    >
      {children}
    </div>
  );
}
