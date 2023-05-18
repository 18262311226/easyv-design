import styles from './index.module.less'
import { FormatPainterOutlined, NodeExpandOutlined, ToolOutlined } from '@ant-design/icons';
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
                <ToolOutlined />
                属性
            </span>),
            key: 2,
            children: `tab 2`
        },
        {
            label: (<span>
                <NodeExpandOutlined />
                数据
            </span>),
            key: 3,
            children: `tab 3`
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