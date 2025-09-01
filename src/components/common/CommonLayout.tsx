import { Outlet } from "react-router-dom"
import Aside from "./Aside"

import { Flex, Layout } from 'antd'

const { Content, Sider, Header } = Layout

const CommonLayout = () => {
    return (
        <Flex gap="middle" wrap className="min-h-screen">
            <Layout >
                <Sider width="25%" >
                    <Aside />
                </Sider>
                <Layout>
                    <Header >Header</Header>
                    <Content >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Flex>
    )
}

export default CommonLayout