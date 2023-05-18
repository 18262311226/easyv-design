import styles from './index.module.less'
import { FormatPainterOutlined, NodeExpandOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';

function Right () {
    const tabs = [
        {
            label: (<span>
                <FormatPainterOutlined />
                样式
            </span>),
            key: 1,
            children: `tab 1`
        },
        {
            label: (<span>
                <NodeExpandOutlined />
                数据
            </span>),
            key: 2,
            children: `tab 2`
        }
    ]

    return (
        <div className={styles.container}>
            <Tabs
                defaultActiveKey="2"
                items={tabs}
            />
        </div>
    )
}

export default Right