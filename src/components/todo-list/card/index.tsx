import { cva, type VariantProps } from 'class-variance-authority';
import { createElement, type JSX } from 'react';

export const cardVariants = cva(
  `rounded-lg border border-solid border-gray-200-todo bg-white-todo shadow-sm`,
  {
    variants: {
      size: {
        none: '',
        md: 'p-5',
      },
    },
    defaultVariants: {
      size: 'none',
    },
  }
);

interface CardBase
  extends VariantProps<typeof cardVariants>,
    React.ComponentProps<'div'> {
  as?: keyof JSX.IntrinsicElements;
}

type CardProps = Readonly<CardBase>;

export default function Card({
  as = 'div',
  size,
  className,
  children,
  ...props
}: CardProps) {
  return createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children
  );
}
