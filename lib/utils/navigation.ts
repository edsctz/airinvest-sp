import { theme } from '@/lib/theme';

export function getHeaderStyle(isScrolled: boolean) {
  return {
    background: isScrolled ? `${theme.colors.background}F2` : 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(8px)',
    borderBottom: isScrolled ? `1px solid ${theme.colors.border}` : 'none',
  };
}

export function getLogoStyle(isScrolled: boolean) {
  return {
    color: isScrolled ? theme.colors.secondary : theme.colors.background,
  };
}
