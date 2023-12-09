import { T_CategoryType } from '@/types/styles/ui'

function useCategoryToColor() {
  const categoryToColor = (category: T_CategoryType) => {
    const mapping: { [key in T_CategoryType]: string } = {
      Frontend: 'primary',
      Backend: 'secondary',
      DevOps: 'info',
      Design: 'success',
      Career: 'warning',
    }

    return mapping[category] || 'error'
  }

  return categoryToColor
}

export default useCategoryToColor
