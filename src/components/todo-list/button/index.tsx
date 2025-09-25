import SpinnerIcon from '@/assets/icons/spinner.svg';
import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import Icon from '../icon';
import Text from '../text';

export const buttonVariants = cva(
  'flex items-center justify-center cursor-pointer transition rounded-lg group gap-2',
  {
    variants: {
      variant: {
        primary: 'bg-gray-200-todo hover:bg-pink-light-todo ',
      },
      size: {
        md: 'h-14 py-4 px-5',
      },
      disabled: {
        true: 'pointer-events-none opacity-50',
      },
      handling: {
        true: 'pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
      handling: false,
    },
  }
);

export const buttonIconVariants = cva('transition', {
  variants: {
    variant: {
      primary: 'fill-pink-base-todo',
    },
    size: {
      md: 'w-5 h-5',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
});

export const buttonTextVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-gray-400-todo',
    },
  },
  defaultVariants: { variant: 'primary' },
});

interface ButtonBase
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>['svg'];
  handling?: boolean;
}

type ButtonProps = Readonly<ButtonBase>;

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  handling,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        disabled,
        handling,
        className,
      })}
      {...props}
    >
      {IconComponent && (
        <Icon
          svg={handling ? SpinnerIcon : IconComponent}
          animate={handling}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
