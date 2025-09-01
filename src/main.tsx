import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from '@/router/routes'
import './index.css'

// 创建路由器
const router = createBrowserRouter(routes)

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    {/** 全局redux */}
    <Provider store={store}>
      {/** 路由 */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
