/** 上传文件支持的功能 */
export const supportData: string[] = [
    '支持常规单文件或多文件上传',
    '支持拖拽上传',
    '支持上传文件夹',
    '支持文件自动分类',
    '支持文件过滤上传',
    '支持随时终止上传及删除',
    '支持图片预览',
    '支持多图共传',
    '支持图片格式转换',
    '支持给图片添加水印',
    '支持无限数量的文件上传',
    '支持大文件分片上传',
    '支持上传进度实时显示',
    '支持断点续传',
    '支持所有常用文件类型',
]

/** 
 * 文件断点续传的断点大小
 * 小于100kb的文件，不需要切片，直接上传
 * 文件大小在100kb-1m之间的，切片处理，切片大小为100kb
 * 文件大小在1m以上的，切片上传，切片大小为500kb
 */
export const POINT_100KB = 1024 * 100 // 设置为100kb 
export const POINT_1M = 1024 * 1024 // 1M
export const CHUNKSIZE_100KB = 1024 * 100
export const CHUNKSIZE_1MB = 1024 * 1024
 
