'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';

interface NavigationButtonProps extends ButtonProps {
  href: string;
}

export function NavigationButton({ href, children, ...props }: NavigationButtonProps) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(href)}
      {...props}
    >
      {children}
    </Button>
  );
}
