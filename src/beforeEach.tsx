import { ReactNode } from 'react'

interface BeforeEachProps {
  children: ReactNode
}

const BeforeEach = ({ children }: BeforeEachProps) => {
  // 这里可以添加路由守卫逻辑
  return <>{children}</>
}

export default BeforeEach