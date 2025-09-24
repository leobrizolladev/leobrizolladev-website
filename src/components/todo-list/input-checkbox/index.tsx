import CheckIcon from '@/assets/icons/check.svg';
import { cva, type VariantProps } from 'class-variance-authority';
import Icon from '../icon';
import Skeleton from '../skeleton';

export const inputCheckboxWrapperVariants = cva(
  `inline-flex items-center justify-center relative group cursor-pointer`
);

export const inputCheckboxVariants = cva(
  `appearance-none peer flex items-center justify-center transition overflow-hidden`,
  {
    variants: {
      variant: {
        none: '',
        default: `
          border-2 border-solid border-green-base-todo hover:border-green-dark-todo
        hover:bg-green-dark-todo/20 checked:border-green-base-todo
        checked:bg-green-base-todo group-hover:checked:border-green-dark-todo
        group-hover:checked:bg-green-dark-todo cursor-pointer
        `,
      },
      size: {
        md: 'w-5 h-5 rounded-sm',
      },
      disabled: {
        true: 'pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      disabled: false,
    },
  }
);

export const inputCheckboxIconVariants = cva(
  `
    absolute top-1/2 -translate-y-1/2
    hidden peer-checked:block fill-white-todo
  `,
  {
    variants: {
      size: {
        md: 'w-4 h-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

interface InputCheckboxBase
  extends VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<'input'>, 'size' | 'disabled'> {
  loading?: boolean;
}

type InputCheckboxProps = Readonly<InputCheckboxBase>;

export default function InputCheckbox({
  size,
  disabled,
  className,
  loading,
  ...props
}: InputCheckboxProps) {
  if (loading) {
    return (
      <Skeleton
        className={inputCheckboxVariants({ variant: 'none', size, className })}
        rounded={'sm'}
      />
    );
  }

  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ size, disabled, className })}
        {...props}
      />
      <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })} />
    </label>
  );
}
