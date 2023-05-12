import { Form, Input, Button } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import styles from './index.module.less'
import { useState } from 'react';

function Login () {
    const [triggle, setTriggle] = useState(false)
    const navigate = useNavigate()
    const toLogin = () => {
        navigate('/easyv')
    }
    const toRegister = () => {
        setTriggle(!triggle)
    }
    return (
        <div className={styles.container}>
            <div className={styles.dialog}>
                <div className={styles.leftbox}></div>
                <div className={styles.rightbox}>
                    <p className={styles.title}>欢迎使用 Easyv-design</p>
                    <Form
                        name="normal_login"
                        className={styles.form}
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" className="login-form-button" onClick={toLogin}>
                                {
                                    triggle ? 'register' : 'login'
                                }
                            </Button>
                                Or <Button type="text" danger onClick={toRegister}>
                                    {triggle ? 'login now' : 'register now'}
                                </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login