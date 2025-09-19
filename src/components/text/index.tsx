import React from 'react';

type TextAs =
  | 'span'
  | 'p'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'button'
  | 'li';

interface TextPropsBase extends React.HTMLAttributes<HTMLElement> {
  as?: TextAs;
  variant?: 'default' | 'muted' | 'heading' | 'blast';
  className?: string;
  children: React.ReactNode;
}

type TextProps = Readonly<TextPropsBase>;

export default function Text({
  as = 'span',
  variant = 'default',
  className,
  children,
  ...props
}: TextProps) {
  const textVarians = {
    default: 'text-xl',
    muted: 'text-xl text-(--text-secondary-calculator)',
    heading: 'text-2xl',
    blast: 'text-3xl',
  };

  return React.createElement(
    as,
    {
      className: `${textVarians[variant]} ${className ?? ''}`,
      ...props,
    },
    children
  );
}
