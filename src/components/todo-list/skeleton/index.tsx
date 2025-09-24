import { cva, type VariantProps } from 'class-variance-authority';

export const skeletonVariants = cva(
  `animate-pulse bg-gray-200-todo pointer-events-none`,
  {
    variants: {
      rounded: {
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      rounded: 'lg',
    },
  }
);

interface SkeletonBase
  extends VariantProps<typeof skeletonVariants>,
    React.ComponentProps<'div'> {}

type SkeletonProps = Readonly<SkeletonBase>;

export default function Skeleton({
  rounded,
  className,
  ...props
}: SkeletonProps) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props} />
  );
}
