import type React from 'react';
import Text from '../text';

interface ButtonPropsBase
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary';
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = Readonly<ButtonPropsBase>;

export default function Button({
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  const buttonVariants = {
    default: 'bg-(--background-calculator)',
    primary: 'bg-(--primary-calculator)',
  };

  return (
    <Text
      as="button"
      variant={'heading'}
      className={`flex items-center  rounded-xl
        p-3 cursor-pointer text-{--text-calculator}
        bg-linear-(--gradient-calculator) hover:bg-linear-(--gradient-hover-calculator)
        shadow-(--shadow-calculator)
        ${buttonVariants[variant]}
        ${className ?? ''}
        `}
      {...props}
    >
      {children}
    </Text>
  );
}
