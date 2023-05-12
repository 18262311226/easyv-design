import { useEffect,createElement } from 'react'
import { AreaChartOutlined, ClockCircleOutlined, ContainerOutlined, WindowsOutlined,SettingOutlined,EditOutlined,EllipsisOutlined } from '@ant-design/icons';
import { Layout, Menu, theme,Avatar, Card, Button } from 'antd';
const { Header, Content, Sider } = Layout;
const { Meta } = Card;
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
                style={{background:colorBgContainer}}
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div className={styles.logo}>
                    <WindowsOutlined />
                    <span style={{marginLeft:'10px'}}>easyv-design</span>
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header
                    className={styles.header}
                    style={{background: colorBgContainer}}
                >
                    <div className={styles.header_body}>
                        <Avatar className={styles.avatar} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </div>
                </Header>
                <Content
                    className={styles.content}
                >
                    <div
                        className={styles.echarts}
                        style={{background: colorBgContainer}}
                    >
                        <div className={styles.operation}>
                            <div className={styles.title}>我的应用</div>
                            <Button className={styles.createBtn} type="primary">新建应用</Button>
                        </div>
                        <Card
                            hoverable
                            style={{
                                width: 300
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://img1.baidu.com/it/u=1509990960,2346188312&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1683997200&t=8b507cf6083bc24c82db76e9cda58c74"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="大屏可视化demo"
                                description="未发布"
                            />
                        </Card>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Easyv