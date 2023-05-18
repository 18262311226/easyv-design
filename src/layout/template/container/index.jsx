import styles from './index.module.less'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { FloatButton,Input } from 'antd';

function Container () {
    return (
        <div className={styles.container}>
            <div className={styles.canvas}></div>
            <FloatButton.Group
                shape="square"
                className={styles.floatButton}
            >
                <FloatButton icon={<PlusOutlined />} />
                <Input />
                <FloatButton icon={<MinusOutlined />} />
            </FloatButton.Group>
        </div>
    )
}

export default Container