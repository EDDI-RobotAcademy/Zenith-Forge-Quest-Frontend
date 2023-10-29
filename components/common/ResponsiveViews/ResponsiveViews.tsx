import { useResponsive } from '@/hooks/useResponsive'

interface I_ResponsiveViewProps {
  children: React.ReactNode
}

const responsiveViews = (predicate: (responsive: ReturnType<typeof useResponsive>) => boolean, name: string) => {
  const Component = ({ children }: I_ResponsiveViewProps) => {
    const responsive = useResponsive()
    return predicate(responsive) ? <>{children}</> : null
  }
  Component.displayName = name
  return Component
}

export const Mobile = responsiveViews(({ isMobile }) => isMobile, 'Mobile')

export const Tablet = responsiveViews(({ isTablet }) => isTablet, 'Tablet')

export const Laptop = responsiveViews(({ isLaptop }) => isLaptop, 'Laptop')

export const Desktop = responsiveViews(({ isDesktop }) => isDesktop, 'Desktop')
