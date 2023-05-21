import styles from './index.module.less'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { FloatButton,Input } from 'antd';
import Bar1 from '../../../components/charts/bars/bar1';
import Line1 from '../../../components/charts/lines/line1';
import Pie1 from '../../../components/charts/pies/pie1';

function Container () {
    return (
        <div className={styles.container}>
            <div className={styles.canvas}>
                <Bar1></Bar1>
                <Line1></Line1>
                <Pie1></Pie1>
            </div>
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