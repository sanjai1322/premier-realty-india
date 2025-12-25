import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const animationClasses: Record<AnimationType, { initial: string; visible: string }> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-12',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-12',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    initial: 'opacity-0 translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    initial: 'opacity-0 -translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  scale: {
    initial: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  fade: {
    initial: 'opacity-0',
    visible: 'opacity-100',
  },
};

const ScrollReveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const { initial, visible } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible ? visible : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
