import styles from './index.module.less'
import { BarChartOutlined, ApartmentOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import CmpList from './cmpList/cmpList'
import LayerList from './layerList/layerList';

function Left () {
    const tabs = [
        {
            label: (<span>
                <BarChartOutlined />
                组件
            </span>),
            key: 1,
            children: (<CmpList></CmpList>)
        },
        {
            label: (<span>
                <ApartmentOutlined />
                图层
            </span>),
            key: 2,
            children: (<LayerList></LayerList>)
        }
    ]

    return (
        <div className={styles.container}>
            <Tabs
                style={
                    {
                        height: '100%'
                    }
                }
                defaultActiveKey="1"
                items={tabs}
            />
        </div>
    )
}

export default Left