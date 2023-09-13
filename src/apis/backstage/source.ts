import { postFile } from "../request";
import type { UploadFile } from 'antd/es/upload/interface';

// 直接上传文件
export const uploadDirect = (file: UploadFile, params?: Record<string, any>) => {
    const formData = new FormData()
    // file.originFileObj表示文件的原始对象，可能为undefined，所以需要断言处理
    formData.append('file', file.originFileObj!)

    if (params) {
        for (const [k, v] of Object.entries(params)) {
            formData.append(k, v)
        }
    }
    return postFile('/v1/uploadDirect', formData)
}

// 文件预传
export const preUploadFile = (file: UploadFile, params?: Record<string, any>) => {
    const formData = new FormData()
    formData.append('file', file.originFileObj!)
    if (params) {
        for (const [k, v] of Object.entries(params)) {
            formData.append(k, v)
        }
    }
    return postFile('/v1/preUpload', formData)
}

// 上传切片
export const uploadChunk = (formData: FormData) => postFile('/v1/chunkUpload', formData)