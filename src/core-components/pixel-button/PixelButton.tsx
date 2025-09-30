import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  JSX,
  ReactNode,
} from 'react';
import { cn } from '@/helpers/utils';

type CommonProps = {
  readonly children: ReactNode;
  readonly variant?: 'primary' | 'secondary' | 'ghost';
  readonly size?: 'md' | 'lg';
  readonly className?: string;
  readonly icon?: ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | 'href'> & {
    readonly href?: undefined;
  };

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    readonly href: string;
  };

export type PixelButtonProps = ButtonProps | AnchorProps;

export function PixelButton(props: PixelButtonProps): JSX.Element {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
    icon,
    ...rest
  } = props;
  const sharedClasses = cn(
    'relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-primary/40 text-sm font-semibold uppercase tracking-[0.25em] transition-transform duration-150 ease-out will-change-transform motion-reduce:transform-none',
    'shadow-[var(--drop-shadow-pixel)] before:absolute before:inset-0 before:rounded-lg before:border before:border-primary/20 before:opacity-0 before:transition-opacity before:duration-150 before:ease-out hover:before:opacity-100 motion-reduce:shadow-none motion-reduce:hover:before:opacity-0',
    size === 'lg'
      ? 'px-6 py-4 text-[0.68rem] sm:px-8 sm:py-5 sm:text-[0.72rem]'
      : 'px-4 py-3 text-[0.62rem] sm:px-5 sm:py-4',
    {
      primary:
        'bg-primary text-primary-foreground motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_20px_40px_rgba(159,124,255,0.35)] motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none',
      secondary:
        'bg-secondary text-secondary-foreground motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-primary/60 motion-safe:hover:shadow-[0_16px_36px_rgba(0,224,255,0.25)] motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none',
      ghost:
        'bg-transparent text-primary motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-primary/80 motion-safe:hover:bg-primary/10 motion-reduce:hover:translate-y-0',
    }[variant],
    className
  );

  const content = (
    <span className="flex items-center gap-2">
      {icon ? <span className="text-base">{icon}</span> : null}
      <span>{children}</span>
    </span>
  );

  if ('href' in props) {
    const anchorProps = rest as AnchorProps;
    const { href, ...anchorRest } = anchorProps;
    return (
      <a className={sharedClasses} href={href} {...anchorRest}>
        {content}
      </a>
    );
  }
  const { type = 'button', ...buttonRest } = rest as ButtonProps;

  return (
    <button className={sharedClasses} type={type} {...buttonRest}>
      {content}
    </button>
  );
}
