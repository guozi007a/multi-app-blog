/** 通用工具 */

interface AppUtilType {
    isMobile: boolean
    serverImg: (name: string) => string
    openPage: (path: string) => void
}

export const AppUtils: AppUtilType = {
    // 是否为手机
    isMobile: /Android|webOS|iPhone|iPod|BlackBerry|ipad/i.test(navigator.userAgent),

    // 获取服务器图片地址
    serverImg: (name) => name ? `${import.meta.env.ENV_IMAGE_PATH}${name}` : '',

    // 打开一个新页签
    openPage(path) {
        window.open(`${import.meta.env.ENV_BASE}${path}`, '_blank', 'noopener,noreferrer')
    },
}
