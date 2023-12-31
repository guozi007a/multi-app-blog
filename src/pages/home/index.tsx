/** 首页  */
import { useState } from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import ContextMenu, { Position } from '~/components/contextMenu'
import { AppUtils } from '~/utils/common'

const windowIcons = [
    { id: 'backstage', name: '管理后台', url: AppUtils.serverImg('window-backstage.jpg'), path: '/backstage' },
    { id: 'project-log', name: '项目开发日志', url: AppUtils.serverImg('log.png'), path: '/project-dev-logs' },
    { id: 'blog', name: '个人博客', url: AppUtils.serverImg('blog.png'), path: '/blog' },
]

const Home = () => {
    const navigate = useNavigate()
    const [menuNum, setMenuNum] = useState(0)
    const [position, setPosition] = useState<Position>()

    return <div className={styles.home}
        onContextMenu={e => {
            e.preventDefault()
        }}
    >
        <div className={styles.bg}></div>
        <div className={styles.main}
            onClick={() => {
                setMenuNum(0)
            }}
        >
            <ul className={styles.home_ul}>
                {
                    windowIcons.map((v, i) => {
                        return <li key={v.id} className={styles.home_li}>
                            <div className={styles.win_img}
                                onDoubleClick={() => {
                                    navigate(v.path)
                                }}
                                onContextMenu={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    setMenuNum(i + 1)
                                    
                                    const x = e.clientX
                                    const y = e.clientY
                                    setPosition({ x: x + 12, y: y + 12 })
                                }}
                            >
                                <img src={v.url} alt="" />
                            </div>
                            <p className={styles.win_name}>{v.name}</p>
                        </li>
                    })
                }
            </ul>
        </div>
        {
            menuNum ? <ContextMenu position={position} /> : null
        }
    </div>
}

export default Home