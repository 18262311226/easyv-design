import styles from './cmpList.module.less'
import { Menu } from 'antd';

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
                    icon: ''
                }
            ]
        }
    ]
    return (
        <>
            {
                list.map(item => (
                  <div key={item.key}>
                    <div>{item.title}</div>
                    {
                       item.children.map(it => (
                            <div key={it.id}>
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