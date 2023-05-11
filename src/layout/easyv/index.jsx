import { useEffect,createElement } from 'react'
import { AreaChartOutlined, ClockCircleOutlined, ContainerOutlined, WindowsOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import styles from './index.module.less'

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
}

function Easyv () {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items = [
        getItem('我的应用', '1', <AreaChartOutlined />),
        getItem('最近编辑', '2', <ClockCircleOutlined />),
        getItem('回收站', '3', <ContainerOutlined />)
    ];

    const onClick = ({ key }) => {
       
    };
    return (
        <Layout style={{height:'100%'}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div className={styles.logo}>
                    <WindowsOutlined />
                    <span style={{marginLeft:'10px'}}>easyv-design</span>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: '#001529'
                    }}
                />
                <Content
                    style={{
                        height:'100%',
                        margin: '24px 16px 0',
                        background: '#001529'
                    }}
                >
                <div
                    style={{
                        padding: 24,
                        height: '100%',
                        background: '#001529'
                    }}
                >
                    content
                </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Easyv