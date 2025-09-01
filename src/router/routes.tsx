import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

// 导入内部路由配置
import internalRouteConfig from './internalRouteConfig'

// 懒加载组件
const Login = lazy(() => import('@/pages/login'))

// 路由配置
export const routes: RouteObject[] = [
    {
    path: '/',
    element: <Navigate to="/login" replace />
  },
  {
    path: '/login',
    element: <Login />
  },
  // 合并内部路由配置
  ...internalRouteConfig,
]