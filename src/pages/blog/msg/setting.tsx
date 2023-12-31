// 消息设置
import styles from './setting.module.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MsgSetting = () => {
    const navigate = useNavigate()
    const [commentVisible, setCommentVisible] = useState(false)
    const [mailVisible, setMailVisible] = useState(false)

    return <div className={styles.setting}>
        <main className={styles.main}>
            <header className={styles.header}>
                <p className={styles.nav}>
                    <span onClick={() => {navigate(-1)}}>消息中心</span> &gt; 消息设置
                </p>
            </header>
            <main className={styles.setting_main}>
                <div className={styles.item}>
                    <div className={styles.title}>是否屏蔽评论消息提醒</div>
                    <p className={styles.subtitle}>屏蔽开启后，评论仍然可以被回复，但不会有消息提示</p>
                    <div className={`${styles.switch} ${commentVisible ? styles.active : ''}`}
                        onClick={() => {setCommentVisible(!commentVisible)}}
                    >
                        <div className={styles.btn}></div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>是否屏蔽私信消息</div>
                    <p className={styles.subtitle}>屏蔽开启后，其他用户仍将可以给您发送私信，但不会有消息提示</p>
                    <div className={`${styles.switch} ${mailVisible ? styles.active : ''}`}
                        onClick={() => {setMailVisible(!mailVisible)}}
                    >
                        <div className={styles.btn}></div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>消息黑名单</div>
                    <p className={styles.subtitle}>被加入黑名单的用户将无法向您发送评论和私信消息</p>
                    <div className={styles.blacklist}></div>
                </div>
            </main>
        </main>
    </div>
}

export default MsgSetting