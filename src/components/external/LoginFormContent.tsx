import React from 'react'
import { Button, Input, Form, Checkbox, Divider } from 'antd'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

interface LoginFormContentProps {
  form: any
  loading: boolean
  onFinish: (values: any) => void
  onGoogleLogin: () => void
  onFacebookLogin: () => void
  isMobile?: boolean
}

const LoginFormContent: React.FC<LoginFormContentProps> = ({
  form,
  loading,
  onFinish,
  onGoogleLogin,
  onFacebookLogin,
  isMobile = false
}) => {
  return (
    <>
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
      </div>

      {/* 第三方登录按钮 */}
      <div className="flex space-x-3 mb-6">
        <Button
          onClick={onGoogleLogin}
          className="flex-1 h-10 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50"
        >
          <GoogleOutlined className="text-red-500" />
          <span className={`text-gray-700 font-medium ${isMobile ? 'text-sm' : ''}`}>Google</span>
        </Button>

        <Button
          onClick={onFacebookLogin}
          className="flex-1 h-10 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50"
        >
          <FacebookOutlined className="text-blue-600" />
          <span className={`text-gray-700 font-medium ${isMobile ? 'text-sm' : ''}`}>Facebook</span>
        </Button>
      </div>

      {/* 分隔符 */}
      <div className="text-center mb-6">
        {isMobile ? (
          <span className="text-gray-500 font-medium">Or</span>
        ) : (
          <Divider>Or</Divider>
        )}
      </div>

      {/* 表单 */}
      <Form
        form={form}
        name={isMobile ? "login-mobile" : "login"}
        onFinish={onFinish}
        layout="vertical"
        size="large"
      >
        <Form.Item
          label={<span className="text-gray-700 font-medium">Email Address</span>}
          name="email"
          rules={[
            { required: true, message: '请输入您的邮箱!' },
            { type: 'email', message: '请输入有效的邮箱地址!' }
          ]}
          className={isMobile ? "mb-4" : "mb-6"}
        >
          <Input
            placeholder="example@gmail.com"
            className="rounded-lg border-gray-300 h-10 bg-gray-50"
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-gray-700 font-medium">Password</span>}
          name="password"
          rules={[{ required: true, message: '请输入您的密码!' }]}
          className="mb-4"
        >
          <Input.Password
            placeholder="••••••••"
            className="rounded-lg border-gray-300 h-10 bg-gray-50"
          />
        </Form.Item>

        <div className={`flex items-center justify-between ${isMobile ? 'mb-4' : 'mb-6'}`}>
          <Form.Item
            name="remember"
            valuePropName="checked"
            className="mb-0"
          >
            <Checkbox className={`text-gray-600 ${isMobile ? 'text-sm' : ''}`}>
              Remember me
            </Checkbox>
          </Form.Item>

          <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
            Reset Password?
          </a>
        </div>

        <Form.Item className={isMobile ? "mb-4" : "mb-6"}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full h-10 bg-blue-600 hover:bg-blue-700 border-none rounded-lg text-white font-medium"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>

      {/* 注册提示 */}
      <div className="text-center">
        <span className="text-gray-600 text-sm">Don't have account yet? </span>
        <a href="#" className="text-blue-500 hover:text-blue-600 font-medium text-sm">
          New Account
        </a>
      </div>
    </>
  )
}

export default LoginFormContent