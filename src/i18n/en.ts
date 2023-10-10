import { type ILocales } from './zh-CN'

/* eslint-disable no-template-curly-in-string */
export const EN: ILocales = {
  UPLOAD_FAILED: 'Upload failed',
  CHECK_SETTINGS: 'Please check your settings',
  CHECK_SETTINGS_AND_NETWORK: 'Please check your settings and network',
  UPLOAD_FAILED_REASON: 'Error code: ${code}, please open the browser and paste the address to see the reason',
  SERVER_ERROR: 'Server error, please try again later',
  AUTH_FAILED: 'Authentication failed',

  // smms
  PICBED_SMMS: 'SM.MS',
  PICBED_SMMS_TOKEN: 'Set Token',
  PICBED_SMMS_BACKUP_DOMAIN: 'Set Backup Upload Domain',
  PICBED_SMMS_MESSAGE_BACKUP_DOMAIN: 'Ex. smms.app',

  // local
  PICBED_LOCAL: 'Local',
  PICBED_LOCAL_PATH: 'Set Path',
  PICBED_LOCAL_MESSAGE_PATH: 'Ex. /Users/name/Pictures/',
  PICBED_LOCAL_CUSTOMURL: 'Set Custom URL',
  PICBED_LOCAL_MESSAGE_CUSTOMURL: 'Ex. https://test.com',
  PICBED_LOCAL_WEBPATH: 'Set Web Path',
  PICBED_LOCAL_MESSAGE_WEBPATH: 'Used to generate url path',

  // Ali-cloud
  PICBED_ALICLOUD: 'Ali Cloud',
  PICBED_ALICLOUD_ACCESSKEYID: 'Set KeyId',
  PICBED_ALICLOUD_ACCESSKEYSECRET: 'Set KeySecret',
  PICBED_ALICLOUD_BUCKET: 'Set Bucket',
  PICBED_ALICLOUD_AREA: 'Set Area',
  PICBED_ALICLOUD_PATH: 'Set Path',
  PICBED_ALICLOUD_CUSTOMURL: 'Set Custom URL',
  PICBED_ALICLOUD_OPTIONS: 'Set URL Suffix',
  PICBED_ALICLOUD_MESSAGE_AREA: 'Ex. oss-cn-beijing',
  PICBED_ALICLOUD_MESSAGE_PATH: 'Ex. test/',
  PICBED_ALICLOUD_MESSAGE_OPTIONS: 'Ex. ?x-oss-process=xxx',
  PICBED_ALICLOUD_MESSAGE_CUSTOMURL: 'Ex. https://test.com',

  // Tencent-cloud
  PICBED_TENCENTCLOUD: 'Tencent Cloud',
  PICBED_TENCENTCLOUD_VERSION: 'Choose COS version',
  PICBED_TENCENTCLOUD_SECRETID: 'Set SecretId',
  PICBED_TENCENTCLOUD_SECRETKEY: 'Set SecretKey',
  PICBED_TENCENTCLOUD_APPID: 'Set AppId',
  PICBED_TENCENTCLOUD_BUCKET: 'Set Bucket',
  PICBED_TENCENTCLOUD_AREA: 'Set Area',
  PICBED_TENCENTCLOUD_ENDPOINT: 'Set Endpoint',
  PICBED_TENCENTCLOUD_PATH: 'Set Path',
  PICBED_TENCENTCLOUD_OPTIONS: 'Set URL Suffix',
  PICBED_TENCENTCLOUD_CUSTOMURL: 'Set Custom URL',
  PICBED_TENCENTCLOUD_MESSAGE_APPID: 'Ex. 1234567890',
  PICBED_TENCENTCLOUD_MESSAGE_AREA: 'Ex. ap-beijing',
  PICBED_TENCENTCLOUD_MESSAGE_PATH: 'Ex. test/',
  PICBED_TENCENTCLOUD_MESSAGE_CUSTOMURL: 'Ex. http://test.com',
  PICBED_TENCENTCLOUD_MESSAGE_OPTIONS: 'Ex. ?imageMogr2',
  PICBED_TENCENTCLOUD_MESSAGE_ENDPOINT: 'Ex. cos-internal.accelerate.tencentcos.cn',
  PICBED_TENCENTCLOUD_SLIM: '極智壓縮',
  PICBED_TENCENTCLOUD_SLIM_CANCEL: '關閉',
  PICBED_TENCENTCLOUD_SLIM_CONFIRM: '開啓',
  PICBED_TENCENTCLOUD_SLIM_TIP: '圖片極智壓縮，詳情請參考[文檔說明](https://cloud.tencent.com/document/product/436/49259)',

  // GitHub
  PICBED_GITHUB: 'GitHub',
  PICBED_GITHUB_TOKEN: 'Set Token',
  PICBED_GITHUB_REPO: 'Set Repo Name',
  PICBED_GITHUB_PATH: 'Set Path',
  PICBED_GITHUB_BRANCH: 'Set Branch',
  PICBED_GITHUB_CUSTOMURL: 'Set Custom URL',
  PICBED_GITHUB_MESSAGE_REPO: 'Ex. username/repo',
  PICBED_GITHUB_MESSAGE_BRANCH: 'Ex. main',
  PICBED_GITHUB_MESSAGE_PATH: 'Ex. test/',
  PICBED_GITHUB_MESSAGE_CUSTOMURL: 'Ex. https://test.com',

  // qiniu
  PICBED_QINIU: 'Qiniu',
  PICBED_QINIU_ACCESSKEY: 'Set AccessKey',
  PICBED_QINIU_SECRETKEY: 'Set SecretKey',
  PICBED_QINIU_BUCKET: 'Set Bucket',
  PICBED_QINIU_PATH: 'Set Path',
  PICBED_QINIU_URL: 'Set URL',
  PICBED_QINIU_OPTIONS: 'Set URL Suffix',
  PICBED_QINIU_AREA: 'Set Area',
  PICBED_QINIU_MESSAGE_PATH: 'Ex. test/',
  PICBED_QINIU_MESSAGE_AREA: 'Ex. z0',
  PICBED_QINIU_MESSAGE_OPTIONS: 'Ex. ?imageslim',
  PICBED_QINIU_MESSAGE_URL: 'Ex. https://xxx.yyy.glb.clouddn.com',

  // telegraph
  PICBED_TELEGRAPH: 'Telegraph',

  // imgur
  PICBED_IMGUR: 'Imgur',
  PICBED_IMGUR_CLIENTID: 'Set ClientId',
  PICBED_IMGUR_USERNAME: 'Set Username',
  PICBED_IMGUR_ACCESS_TOKEN: 'Set Access Token',
  PICBED_IMGUR_ALBUM: 'Set Album Name',
  PICBED_IMGUR_PROXY: 'Set Proxy',
  PICBED_IMGUR_MESSAGE_CLIENTID: 'Fill in when you need to upload as anonymous',
  PICBED_IMGUR_MESSAGE_USERNAME: 'Fill in when you need to upload to the account',
  PICBED_IMGUR_MESSAGE_ACCESS_TOKEN: 'Fill in when you need to upload to the account',
  PICBED_IMGUR_MESSAGE_ALBUM: '例如：test',
  PICBED_IMGUR_MESSAGE_PROXY: 'Ex. http://127.0.0.1:1080',

  // upyun
  PICBED_UPYUN: 'Upyun',
  PICBED_UPYUN_BUCKET: 'Set Bucket',
  PICBED_UPYUN_OPERATOR: 'Set Operator',
  PICBED_UPYUN_PASSWORD: 'Set Operator Password',
  PICBED_UPYUN_PATH: 'Set Path',
  PICBED_UPYUN_URL: 'Set URL',
  PICBED_UPYUN_OPTIONS: 'Set URL Suffix',
  PICBED_UPYUN_ANTI_LEECH_TOKEN: 'Set Anti-Leech Token',
  PICBED_UPYUN_EXPIRE_TIME: 'Set Expire Time(seconds)',
  PICBED_UPYUN_MESSAGE_OPERATOR: 'Ex. me',
  PICBED_UPYUN_MESSAGE_PASSWORD: 'Please type the operator password',
  PICBED_UPYUN_MESSAGE_URL: 'Ex. http://xxx.test.upcdn.net',
  PICBED_UPYUN_MESSAGE_OPTIONS: 'Ex. !imgslim',
  PICBED_UPYUN_MESSAGE_PATH: 'Ex. test/',

  // webdav
  PICBED_WEBDAVPLIST: 'WebDAV',
  PICBED_WEBDAVPLIST_HOST: 'Set Host',
  PICBED_WEBDAVPLIST_SSLENABLED: 'Enable HTTPS',
  PICBED_WEBDAVPLIST_USERNAME: 'Set Username',
  PICBED_WEBDAVPLIST_PASSWORD: 'Set Password',
  PICBED_WEBDAVPLIST_PATH: 'Set Path',
  PICBED_WEBDAVPLIST_WEBSITE_PATH: 'Set Website Path',
  PICBED_WEBDAVPLIST_CUSTOMURL: 'Set Custom URL',
  PICBED_WEBDAVPLIST_AUTHTYPE: 'Set Auth Type',
  PICBED_WEBDAVPLIST_MESSAGE_HOST: 'Ex. https://example.com/webdav',
  PICBED_WEBDAVPLIST_MESSAGE_SSLENABLED: 'Enable HTTPS',
  PICBED_WEBDAVPLIST_MESSAGE_USERNAME: 'Ex. me',
  PICBED_WEBDAVPLIST_MESSAGE_PASSWORD: 'Please type the password',
  PICBED_WEBDAVPLIST_MESSAGE_PATH: 'Ex. test/',
  PICBED_WEBDAVPLIST_MESSAGE_WEBSITE_PATH: 'Used to generate the URL of the image',
  PICBED_WEBDAVPLIST_MESSAGE_CUSTOMURL: 'Ex. https://test.com',

  // sftpplist
  PICBED_SFTPPLIST: 'SFTP Buildin',
  PICBED_SFTPPLIST_HOST: 'Set Host',
  PICBED_SFTPPLIST_PORT: 'Set Port',
  PICBED_SFTPPLIST_USERNAME: 'Set Username',
  PICBED_SFTPPLIST_PASSWORD: 'Set Password',
  PICBED_SFTPPLIST_PRIVATEKEY: 'Set Private Key',
  PICBED_SFTPPLIST_PRIVATEKEY_PASSPHRASE: 'Set Private Key Passphrase',
  PICBED_SFTPPLIST_UPLOADPATH: 'Set Upload Path',
  PICBED_SFTPPLIST_CUSTOMURL: 'Set Custom URL',
  PICBED_SFTPPLIST_WEBSITE_PATH: 'Set Website Path',
  PICBED_SFTPPLIST_FILE_USER: 'Set File User:Group',
  PICBED_SFTPPLIST_FILE_MODE: 'Set File Mode',
  PICBED_SFTPPLIST_DIR_MODE: 'Set Directory Mode',
  PICBED_SFTPPLIST_MESSAGE_HOST: 'Ex. 1.1.1.3',
  PICBED_SFTPPLIST_MESSAGE_PORT: 'Default 22',
  PICBED_SFTPPLIST_MESSAGE_PRIVATEKEY: 'Ex. /Users/xxx/.ssh/id_rsa',
  PICBED_SFTPPLIST_MESSAGE_PRIVATEKEY_PASSPHRASE: 'Please type the private key passphrase',
  PICBED_SFTPPLIST_MESSAGE_UPLOADPATH: 'Ex. test/',
  PICBED_SFTPPLIST_MESSAGE_CUSTOMURL: 'Ex. https://test.com',
  PICBED_SFTPPLIST_MESSAGE_WEBSITE_PATH: 'Used to generate the URL of the image',
  PICBED_SFTPPLIST_MESSAGE_FILE_USER: 'Ex. www:data',
  PICBED_SFTPPLIST_MESSAGE_FILE_MODE: 'Ex. 0664',
  PICBED_SFTPPLIST_MESSAGE_DIR_MODE: 'Ex. 0775',

  // PicList
  PICBED_PICLIST: 'PicList',
  PICBED_PICLIST_HOST: 'Set Host',
  PICBED_PICLIST_PORT: 'Set Port',
  PICBED_PICLIST_PICBED: 'Set PicBed',
  PICBED_PICLIST_CONFIGNAME: 'Set Config Name',
  PICBED_PICLIST_KEY: 'Set Key',

  BUILDIN_RENAME_FORMAT: 'Set rename format',
  BUILDIN_RENAME_ENABLE: 'Enable rename',

  BUILDIN_WATERMARK_ISADDWATERMARK: 'Whether to add watermark',
  BUILDIN_WATERMARK_MESSAGE_ISADDWATERMARK: 'Enable when watermark is required',
  BUILDIN_WATERMARK_WATERMARKTYPE: 'Set watermark type',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKTYPE: 'Please select watermark type',
  BUILDIN_WATERMARK_ISFULLSCREENWATERMARK: 'Whether to use full-screen watermark',
  BUILDIN_WATERMARK_MESSAGE_ISFULLSCREENWATERMARK: 'Enable when full-screen watermark is required',
  BUILDIN_WATERMARK_WATERMARKDEGREE: 'Set watermark angle',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKDEGREE: 'Please enter a number',
  BUILDIN_WATERMARK_WATERMARKTEXT: 'Set watermark text',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKTEXT: 'Please enter watermark text',
  BUILDIN_WATERMARK_WATERMARKTEXTFONTPATH: 'Set watermark font',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKFONTPATH: 'Please enter the watermark font file path',
  BUILDIN_WATERMARK_WATERMARKFONTRATIO: 'Set the ratio of the watermark to the image',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKFONTRATIO: 'Please enter a number between 0-1',
  BUILDIN_WATERMARK_WATERMARKFONTCOLOR: 'Set watermark font color',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKFONTCOLOR: 'Please enter the RGB color value',
  BUILDIN_WATERMARK_WATERMARKIMAGEPATH: 'Set watermark image path',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKIMAGEPATH: 'Please enter the watermark image path',
  BUILDIN_WATERMARK_WATERMARKPOSITION: 'Set watermark position',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKPOSITION: 'Please select watermark position',

  BUILDIN_COMPRESS_QUALITY: 'Set image quality',
  BUILDIN_COMPRESS_MESSAGE_QUALITY: 'Please enter an integer between 0-100',
  BUILDIN_COMPRESS_ISCONVERT: 'Whether to perform format conversion',
  BUILDIN_COMPRESS_MESSAGE_ISCONVERT: 'Enable when format conversion is required',
  BUILDIN_COMPRESS_CONVERTFORMAT: 'Set conversion format',
  BUILDIN_COMPRESS_MESSAGE_CONVERTFORMAT: 'Please select conversion format',
  BUILDIN_COMPRESS_ISRESIZE: 'Whether to resize the image',
  BUILDIN_COMPRESS_MESSAGE_ISRESIZE: 'Enable when image resizing is required',
  BUILDIN_COMPRESS_RESIZEWIDTH: 'Set resizing width',
  BUILDIN_COMPRESS_MESSAGE_RESIZEWIDTH: 'Please enter a number',
  BUILDIN_COMPRESS_RESIZEHEIGHT: 'Set resizing height',
  BUILDIN_COMPRESS_MESSAGE_RESIZEHEIGHT: 'Please enter a number',
  BUILDIN_COMPRESS_ISRESIZEBYPERCENT: 'Whether to resize the image by percentage',
  BUILDIN_COMPRESS_MESSAGE_ISRESIZEBYPERCENT: 'Enable when resizing by percentage is required',
  BUILDIN_COMPRESS_ISFLIP: 'Whether to flip the image vertically',
  BUILDIN_COMPRESS_ISFLOP: 'Whether to flip the image horizontally',
  BUILDIN_COMPRESS_RESIZEPERCENT: 'Set resizing percentage',
  BUILDIN_COMPRESS_MESSAGE_RESIZEPERCENT: 'Please enter a number',
  BUILDIN_COMPRESS_SKIPRESIZEOFSMALLIMG: 'Whether to skip resizing of small images',
  BUILDIN_COMPRESS_ISROTATE: 'Whether to rotate the image',
  BUILDIN_COMPRESS_MESSAGE_ISROTATE: 'Enable when image rotation is required',
  BUILDIN_COMPRESS_ROTATEDEGREE: 'Set rotation angle',
  BUILDIN_COMPRESS_MESSAGE_ROTATEDEGREE: 'Please enter a number, can be negative',
  BUILDIN_COMPRESS_ISREMOVEEXIF: 'Whether to remove EXIF information',
  BUILDIN_COMPRESS_MESSAGE_ISREMOVEEXIF: 'Enable when removing EXIF information is required',
  // Plugin Handler
  PLUGIN_HANDLER_PLUGIN_INSTALL_SUCCESS: 'Plugin installed successfully',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED: 'Plugin installation failed',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED_REASON: 'Plugin installation failed, error code is ${code}, error log is \n ${data}',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED_PATH: 'Plugin installation failed, please enter a valid plugin name or valid installation path',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_SUCCESS: 'Plugin uninstalled successfully',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED: 'Plugin uninstall failed',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED_REASON: 'Plugin uninstall failed, error code is ${code}, error log is \n ${data}',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED_VALID: 'Plugin uninstall failed, please enter a valid plugin name',
  PLUGIN_HANDLER_PLUGIN_UPDATE_SUCCESS: 'Plugin updated successfully',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED: 'Plugin update failed',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED_REASON: 'Plugin update failed, error code is ${code}, error log is \n ${data}',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED_VALID: 'Plugin update failed, please enter a valid plugin name'
}
