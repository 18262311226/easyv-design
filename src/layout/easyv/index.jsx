import { useEffect,createElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AreaChartOutlined, ClockCircleOutlined, ContainerOutlined, WindowsOutlined,SettingOutlined,EditOutlined,EllipsisOutlined } from '@ant-design/icons';
import { Layout, Menu, theme,Avatar, Card, Button,Badge, Empty, List, Modal, Form, Input } from 'antd';
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
    const navigate = useNavigate()
    const [isModalOpen, setModalOpen] = useState(false)

    const {
        token: { colorBgContainer },
    } = theme.useToken()

    const items = [
        getItem('我的应用', '1', <AreaChartOutlined />),
        getItem('最近编辑', '2', <ClockCircleOutlined />),
        getItem('回收站', '3', <ContainerOutlined />)
    ]

    const data = [1, 2, 3, 4, 5]

    const createNewApp = () => {
        setModalOpen(!isModalOpen)
    }

    const onClick = ({ key }) => {
       
    }

    const handleOk = () => {
        navigate('/template')
        setModalOpen(false)
    }

    const handleCancel = () => {
        setModalOpen(false)
    }

    const editTemplate = () => {
        navigate('/template')
    }

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
                            <Button className={styles.createBtn} type="primary" onClick={createNewApp}>新建应用</Button>
                        </div>
                        <div className={styles.cards}>
                            {
                                data.length ? (
                                    <List
                                        grid={{ gutter: 16, column: 4 }}
                                        dataSource={data}
                                        renderItem={(item) => (
                                            <List.Item>
                                                <Badge.Ribbon color="volcano" text="my App">
                                                <Card
                                                    hoverable
                                                    className={styles.cardbox}
                                                    cover={
                                                        <img
                                                            alt="example"
                                                            src="https://img1.baidu.com/it/u=1509990960,2346188312&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1683997200&t=8b507cf6083bc24c82db76e9cda58c74"
                                                        />
                                                    }
                                                    actions={[
                                                        <SettingOutlined key="setting" />,
                                                        <EditOutlined key="edit" onClick={editTemplate}/>,
                                                        <EllipsisOutlined key="ellipsis" />,
                                                    ]}
                                                >
                                                    <Meta
                                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                                        title="大屏可视化demo"
                                                        description="未发布"
                                                    />
                                                </Card>
                                                </Badge.Ribbon>
                                            </List.Item>
                                        )}
                                    />
                                ) : (
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                )
                            }
                        </div>
                    </div>
                </Content>
            </Layout>
            <Modal title="create" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="appname"
                        label="应用名称"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input type="text" placeholder="请输入应用名称" />
                    </Form.Item>
                    <Form.Item
                        label="简介"
                        name="option"
                    >
                        <Input
                            type="text"
                            placeholder="请输入应用简介"
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </Layout>
    )
}

export default Easyv