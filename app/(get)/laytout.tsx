// Laytout

interface getLayoutProps {
  children: React.ReactNode
}

function getLayout({ children }: getLayoutProps) {
  return <div>{children}</div>
}

export default getLayout
