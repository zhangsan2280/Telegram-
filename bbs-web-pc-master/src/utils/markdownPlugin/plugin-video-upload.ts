import type { BytemdPlugin } from 'bytemd'
import { editorUpload, showNotifications } from '../markdownEditor';
import { visit } from 'unist-util-visit'

/**
 * 视频上传插件（未实现）
 * @param uploadPath 上传服务器地址
 * @param uploadFieldName 上传字段名称
 * @param fileStorageSystem 文件存储系统
 * @returns 
 */
export function videoUpload(uploadPath:string,uploadFieldName:string,fileStorageSystem:number): BytemdPlugin {
  return {
    
  }
}