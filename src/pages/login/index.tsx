import React, { useState } from 'react'
import { message } from 'antd'
import { Form } from 'antd'
import loginImage from '../../assets/login.jpg'
import LoginFormContent from '../../components/external/LoginFormContent'

const Login: React.FC = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      console.log('登录信息:', values)
      message.success('登录成功！')
    } catch (error) {
      message.error('登录失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    message.info('Google登录功能待实现')
  }

  const handleFacebookLogin = () => {
    message.info('Facebook登录功能待实现')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 桌面端布局 - lg及以上屏幕 */}
      <div className="hidden lg:flex min-h-screen">
        {/* 左侧插图区域 */}
        <div className="w-1/2 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
          <img src={loginImage} alt="Login Illustration" className="w-full h-full object-cover" />
        </div>
        
        {/* 右侧表单区域 */}
        <div className="w-1/2 flex items-center justify-center px-10 py-8">
          <div className="w-full max-w-sm">
            <LoginFormContent
              form={form}
              loading={loading}
              onFinish={onFinish}
              onGoogleLogin={handleGoogleLogin}
              onFacebookLogin={handleFacebookLogin}
              isMobile={false}
            />
          </div>
        </div>
      </div>

      {/* 移动端和平板布局 - lg以下屏幕，表单层叠在图片上方 */}
      <div className="lg:hidden min-h-screen relative">
        {/* 背景图片 - 全屏覆盖 */}
        <div className="absolute inset-0">
          <img 
            src={loginImage} 
            alt="Login Illustration" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* 半透明遮罩层 */}
        <div className="absolute inset-0 bg-white bg-opacity-20"></div>
        
        {/* 表单区域 - 层叠在图片上方，居中显示 */}
        <div className="relative z-10 flex items-center justify-center px-6 py-8">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
            <LoginFormContent
              form={form}
              loading={loading}
              onFinish={onFinish}
              onGoogleLogin={handleGoogleLogin}
              onFacebookLogin={handleFacebookLogin}
              isMobile={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login