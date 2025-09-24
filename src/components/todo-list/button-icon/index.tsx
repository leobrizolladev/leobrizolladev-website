import { cva, type VariantProps } from 'class-variance-authority';
import Icon from '../icon';
import Skeleton from '../skeleton';

export const buttonIconVariants = cva(
  'inline-flex items-center justify-center cursor-pointer transition group',
  {
    variants: {
      variant: {
        none: '',
        primary: 'bg-green-base-todo hover:bg-green-dark-todo',
        secondary: 'bg-pink-light-todo hover:bg-pink-dark-todo',
        tertiary: 'bg-transparent hover:bg-gray-200-todo',
      },
      size: {
        sm: 'w-6 h-6 p-1 rounded',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
      disabled: false,
    },
  }
);

export const buttonIconIconVariants = cva('transition', {
  variants: {
    variant: {
      none: '',
      primary: 'fill-white-todo',
      secondary: 'fill-pink-base-todo group-hover:fill-white-todo',
      tertiary: 'fill-gray-300-todo group-hover:fill-gray-400-todo',
    },
    size: {
      sm: 'w-4 h-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});

interface ButtonIconBase
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>['svg'];
  loading?: boolean;
}

type ButtonIconProps = Readonly<ButtonIconBase>;

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  loading,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded={'sm'}
        className={buttonIconVariants({
          variant: 'none',
          size,
          className,
        })}
      />
    );
  }

  return (
    <button
      className={buttonIconVariants({
        variant,
        size,
        disabled,
        className,
      })}
      {...props}
    >
      <Icon svg={icon} className={buttonIconIconVariants({ variant, size })} />
    </button>
  );
}
