import styles from './index.module.less'
import { BarChartOutlined, ApartmentOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';

function Left () {
    const tabs = [
        {
            label: (<span>
                <BarChartOutlined />
                组件
            </span>),
            key: 1,
            children: `tab 1`
        },
        {
            label: (<span>
                <ApartmentOutlined />
                图层
            </span>),
            key: 2,
            children: `tab 2`
        }
    ]

    return (
        <div className={styles.container}>
            <Tabs
                defaultActiveKey="1"
                items={tabs}
            />
        </div>
    )
}

export default Left