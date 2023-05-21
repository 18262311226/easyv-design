import styles from './cmpList.module.less'
import { Menu } from 'antd';
import { BarChartOutlined } from '@ant-design/icons';

function CmpList (props) {
    const list = [
        {
            title: '柱状图',
            key: '1',
            icon: '',
            children: [
                {
                    title: '柱状图 1',
                    key: '1',
                    icon: (<BarChartOutlined />)
                },
                {
                    title: '柱状图 2',
                    key: '2',
                    icon: (<BarChartOutlined />)
                },
                {
                    title: '柱状图 3',
                    key: '3',
                    icon: (<BarChartOutlined />)
                }
            ]
        },
        {
            title: '折线图',
            key: '2',
            icon: '',
            children: [
                {
                    title: '折线图 1',
                    key: '1',
                    icon: (<BarChartOutlined />)
                },
                {
                    title: '折线图 2',
                    key: '2',
                    icon: (<BarChartOutlined />)
                },
                {
                    title: '折线图 3',
                    key: '3',
                    icon: (<BarChartOutlined />)
                }
            ]
        },
        {
            title: '饼图',
            key: '3',
            icon: '',
            children: [
                {
                    title: '饼图 1',
                    key: '1',
                    icon: (<BarChartOutlined />)
                },
                {
                    title: '饼图 2',
                    key: '2',
                    icon: (<BarChartOutlined />)
                },
                {
                    title: '饼图 3',
                    key: '3',
                    icon: (<BarChartOutlined />)
                }
            ]
        },
        {
            title: '列表',
            key: '4',
            icon: '',
            children: [
                {
                    title: '列表 1',
                    key: '1',
                    icon: (<BarChartOutlined />)
                },
                {
                    title: '列表 2',
                    key: '2',
                    icon: (<BarChartOutlined />)
                },
                {
                    title: '列表 3',
                    key: '3',
                    icon: (<BarChartOutlined />)
                }
            ]
        },
        {
            title: '地图',
            key: '5',
            icon: '',
            children: [
                {
                    title: '地图 1',
                    key: '1',
                    icon: (<BarChartOutlined />)
                },
                {
                    title: '地图 2',
                    key: '2',
                    icon: (<BarChartOutlined />)
                }
            ]
        }
    ]
    return (
        <>
            {
                list.map(item => (
                  <div className={styles.cmpList} key={item.key}>
                    <div>{item.title}</div>
                    {
                       item.children.map(it => (
                            <div className={styles.listItem} key={it.key} draggable>
                                {it.icon}
                                {it.title}
                            </div>
                       )) 
                    }
                  </div>
                ))
            }
        </>
    )
}

export default CmpList