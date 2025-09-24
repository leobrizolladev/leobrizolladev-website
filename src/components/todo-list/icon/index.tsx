import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

export const iconVariants = cva('', {
  variants: {
    animate: {
      false: '',
      true: 'animate-spin',
    },
  },
  defaultVariants: { animate: false },
});

interface IconBase
  extends React.ComponentProps<'svg'>,
    VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<'svg'>>;
}

type IconProps = Readonly<IconBase>;

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent {...props} className={iconVariants({ animate, className })} />
  );
}
