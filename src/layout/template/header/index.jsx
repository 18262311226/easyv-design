import styles from './index.module.less'
import { RiseOutlined,LeftCircleOutlined,FolderOutlined,DesktopOutlined,DoubleLeftOutlined,DoubleRightOutlined,DownloadOutlined,ExpandOutlined,HeatMapOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'

function Header () {
    const navigate = useNavigate()

    const backIndex = () => {
        navigate(-1)
    }

    return (
        <div className={styles.container}>
            <div className={styles.backIndex}>
                <div className={styles.back} onClick={backIndex}>
                    <LeftCircleOutlined />
                </div>
                <div className={styles.title}>easyv-demo1</div>
            </div>
            <div className={styles.navigates}>
                <ul className={styles.navigatesList}>
                    <li className={styles.listItem}>
                        <RiseOutlined className={styles.icon}/>
                        发布
                    </li>
                    <li className={styles.listItem}>
                        <FolderOutlined className={styles.icon}/>
                        保存
                    </li>
                    <li className={styles.listItem}>
                        <DesktopOutlined className={styles.icon}/>
                        预览
                    </li>
                    <li className={styles.listItem}>
                        <DoubleLeftOutlined className={styles.icon}/>
                        撤回
                    </li>
                    <li className={styles.listItem}>
                        <DoubleRightOutlined className={styles.icon}/>
                        回退
                    </li>
                    <li className={styles.listItem}>
                        <DownloadOutlined className={styles.icon}/>
                        获取
                    </li>
                    <li className={styles.listItem}>
                        <ExpandOutlined className={styles.icon}/>
                        全屏
                    </li>
                    <li className={styles.listItem}>
                        <HeatMapOutlined className={styles.icon}/>
                        清除
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header