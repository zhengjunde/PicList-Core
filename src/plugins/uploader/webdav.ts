import { IPicGo, IPluginConfig, IWebdavPlistConfig, IOldReqOptionsWithFullResponse } from '../../types'
import { IBuildInEvent } from '../../utils/enum'
import { ILocalesKey } from '../../i18n/zh-CN'
import mime from 'mime-types'
import path from 'path'

const postOptions = async (ctx: IPicGo, options: IWebdavPlistConfig, fileName: string, image: Buffer): Promise<IOldReqOptionsWithFullResponse> => {
  const paths = [...options.path.replace(/\/+$/g, '').split('/'), ...path.dirname(fileName).split('/')]
  let currentPath = ''
  for (const p of paths) {
    if (p) {
      currentPath += `/${p}`
      const diroptions = {
        method: 'MKCOL',
        url: `${options.host}${encodeURI(currentPath)}`.replace(/%2F/g, '/'),
        headers: {
          Authorization: `Basic ${Buffer.from(`${options.username}:${options.password}`).toString('base64')}`
        }
      }
      try {
        await ctx.request(diroptions)
      } catch (err) {
        console.log(err)
      }
    }
  }
  return {
    method: 'PUT',
    url: `${options.host}/${options.path === '/' ? '' : encodeURI(options.path)}${encodeURIComponent(fileName)}`.replace(/%2F/g, '/'),
    headers: {
      Authorization: `Basic ${Buffer.from(`${options.username}:${options.password}`).toString('base64')}`,
      'Content-Type': mime.lookup(fileName) || 'application/octet-stream',
      'Content-Length': image.length
    },
    body: image,
    resolveWithFullResponse: true
  }
}

const handle = async (ctx: IPicGo): Promise<IPicGo | boolean> => {
  const webdavplistOptions = ctx.getConfig<IWebdavPlistConfig>('picBed.webdavplist')
  if (!webdavplistOptions) {
    throw new Error('Can\'t find webdavplist config')
  }
  webdavplistOptions.host = webdavplistOptions.host.replace(/^https?:\/\/|\/+$/g, '')
  webdavplistOptions.host = (webdavplistOptions.sslEnabled ? 'https://' : 'http://') + webdavplistOptions.host
  webdavplistOptions.path = (webdavplistOptions.path || '').replace(/^\/+|\/+$/g, '') + '/'
  const webpath = (webdavplistOptions.webpath || '').replace(/^\/+|\/+$/g, '') + '/'
  try {
    const imgList = ctx.output
    const customUrl = webdavplistOptions.customUrl
    const path = webdavplistOptions.path
    for (const img of imgList) {
      if (img.fileName && img.buffer) {
        let image = img.buffer
        if (!image && img.base64Image) {
          image = Buffer.from(img.base64Image, 'base64')
        }
        const options = await postOptions(ctx, webdavplistOptions, img.fileName, image)
        const body = await ctx.request(options)
        if (body.statusCode >= 200 && body.statusCode < 300) {
          delete img.base64Image
          delete img.buffer
          const baseUrl = customUrl || webdavplistOptions.host
          if (webdavplistOptions.webpath) {
            img.imgUrl = `${baseUrl}/${webpath === '/' ? '' : encodeURIComponent(webpath)}${encodeURIComponent(img.fileName)}`.replace(/%2F/g, '/')
          } else {
            img.imgUrl = `${baseUrl}/${path === '/' ? '' : encodeURIComponent(path)}${encodeURIComponent(img.fileName)}`.replace(/%2F/g, '/')
          }
        } else {
          throw new Error('Upload failed')
        }
      }
    }
    return ctx
  } catch (err: any) {
    ctx.emit(IBuildInEvent.NOTIFICATION, {
      title: ctx.i18n.translate<ILocalesKey>('UPLOAD_FAILED'),
      body: ctx.i18n.translate<ILocalesKey>('CHECK_SETTINGS')
    })
    throw err
  }
}

const config = (ctx: IPicGo): IPluginConfig[] => {
  const userConfig = ctx.getConfig<IWebdavPlistConfig>('picBed.webdavplist') || {}
  const config: IPluginConfig[] = [
    {
      name: 'host',
      type: 'input',
      get alias () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_HOST') },
      default: userConfig.host || '',
      required: true
    },
    {
      name: 'sslEnabled',
      type: 'confirm',
      get alias () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_SSLENABLED') },
      required: true,
      default: userConfig.sslEnabled || true,
      get prefix () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_SSLENABLED') },
      get message () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_MESSAGE_SSLENABLED') }
    },
    {
      name: 'username',
      type: 'input',
      get alias () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_USERNAME') },
      default: userConfig.username || '',
      required: true,
      get prefix () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_USERNAME') },
      get message () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_MESSAGE_USERNAME') }
    },
    {
      name: 'password',
      type: 'password',
      get alias () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_PASSWORD') },
      default: userConfig.password || '',
      required: true,
      get prefix () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_PASSWORD') },
      get message () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_MESSAGE_PASSWORD') }
    },
    {
      name: 'path',
      type: 'input',
      get alias () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_PATH') },
      default: userConfig.path || '',
      required: false,
      get prefix () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_PATH') },
      get message () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_MESSAGE_PATH') }
    },
    {
      name: 'webpath',
      type: 'input',
      get alias () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_WEBSITE_PATH') },
      default: userConfig.path || '',
      required: false,
      get prefix () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_WEBSITE_PATH') },
      get message () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_MESSAGE_WEBSITE_PATH') }
    },
    {
      name: 'customUrl',
      type: 'input',
      get alias () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_CUSTOMURL') },
      default: userConfig.customUrl || '',
      required: false,
      get prefix () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_CUSTOMURL') },
      get message () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST_MESSAGE_CUSTOMURL') }
    }
  ]
  return config
}

export default function register (ctx: IPicGo): void {
  ctx.helper.uploader.register('webdavplist', {
    get name () { return ctx.i18n.translate<ILocalesKey>('PICBED_WEBDAVPLIST') },
    handle,
    config
  })
}
