/** 后台管理-开发日志-发布日志 */
import styles from './index.module.scss'
import { Button, Checkbox, Form, Input, Space, message } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { publishLogsAPI } from '~/apis/backstage/devLogs';
import { shortCutKeys2LogIcon } from '~/utils/shortCutKeys2LogIcon';

export interface InpItem {
    key: React.Key
    id: string
    content?: React.ReactNode
}

type FieldType = {
    confirm?: string
};

const initVal = (): InpItem[] => {
    const id = uuidv4()
    return ([{
        key: id,
        id,
        content: '',
    }])
}

const PublishLog = () => {
    const [form] = Form.useForm();
    const [inpList, setInpList] = useState<InpItem[]>(initVal())

    const onFinish = async (values: any) => {
        if (!values?.confirm) {
            message.warning('请先选择确认发布~')
            return
        }

        await publishLogsAPI(inpList)
        message.success('发布成功！')
        setInpList(initVal())
    };
    
    const onFinishFailed = () => {
        message.error('验证失败')
    };

    const handleChange = (changedValues: Record<string, string>, _: Record<string, string>) => {
        const keys = Object.keys(changedValues)
        if (keys && keys.length > 1) return
        
        const k = keys[0]
        const list: InpItem[] = inpList.map((v) => {
            return v.id === k
                ? {
                    ...v,
                    content: changedValues[k]
                }
                : v
        })
        setInpList(list)
    }

    const handleInsert = (id: string) => {
        const isHasEmptyInp = inpList.some(v => !v.content)
        if (isHasEmptyInp) {
            message.warning('添加失败，有输入框未输入内容！')
            return
        }
        const list = [...inpList]
        const result: InpItem[] = []
        for (const v of list) {
            result.push(v)
            if (v.id === id) {
                result.push(initVal()[0])
            }
        }
        setInpList(result)
    }

    const handleDelete = (id: string) => {
        if (inpList.length <= 1) {
            message.warning('删除失败,请至少保留一个输入框！')
            return
        }
        setInpList(inpList.filter(v => v.id !== id))
        message.success('删除成功！')
    }

    const handleClear = (id: string) => {
        form.resetFields([id])
        const list = inpList.map((v) => {
            return v.id === id
                ? {
                    ...v,
                    content: '',
                }
                : v
        })
        setInpList(list)
    }
    
    return <>
        <div className={styles.publish_wrap}>
            <Form
                name="publishLog"
                style={{ width: '100%' }}
                initialValues={{ confirm: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                onValuesChange={handleChange}
                form={form}
            >
                {
                    inpList.map((v) => {
                        return (
                            <Form.Item
                                key={v.key}
                                label="日志内容"
                                name={v.id}
                                rules={[{ required: true, message: 'Please input logs!' }]}
                            >
                                {/* classNames通过item属性，会为Space中的每一个子元素的wrap添加一个类名 */}
                                <Space className={styles.space} classNames={{item: styles.space_item}}>
                                    <Input autoFocus key={v.key} value={shortCutKeys2LogIcon(v.content as string)} />
                                    <Button type='primary'
                                        onClick={() => {
                                            handleInsert(v.id)
                                        }}
                                    >新增</Button>
                                    <Button type='primary' danger
                                        onClick={() => {
                                            handleDelete(v.id)
                                        }}
                                    >删除</Button>
                                    <Button type='primary' className={styles.clear_btn}
                                        onClick={() => {
                                            handleClear(v.id)
                                        }}
                                    >清空</Button>
                                </Space>
                            </Form.Item>
                        )
                    })
                }

                <Form.Item<FieldType>
                    name="confirm"
                    valuePropName="checked"
                    wrapperCol={{ span: 24 }}
                    style={{textAlign: 'center'}}
                >
                    <Checkbox>我已完成日志内容编辑，确认发布</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{ span: 24 }}
                    style={{textAlign: 'center'}}
                >
                    <Button type="primary" htmlType="submit">
                        发布日志
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </>
}

export default PublishLog