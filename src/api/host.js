

const TEST_URL = {
    baseUrl:'https://portal-test.hightalk.ai',  // 门户网站地址
    SSOWebUrl:{
        zh:"https://hightalkssoweb-test.azurewebsites.net/zh-cn",  // 客户端地址
        en:'/'
    },
    SSOServerApi:"https://hightalkssoapi-test.azurewebsites.net",  // 注册页面 服务器资源地址 api
    requestHost: 'https://hightalkadminapi-test.azurewebsites.net', // 服务器地址 api
}
const UAT_URL = {
    // baseUrl:'https://htadminweb-uat.azurewebsites.net',
    // SSOWebUrl:{
    //     zh:"https://hightalkssoweb-test.azurewebsites.net/zh-cn",
    //     en:'/'
    // },
    // SSOServerApi:"https://hightalkssoapi-test.azurewebsites.net", // 注册页面 服务器资源地址
    // requestHost: 'https://htadminapi-uat.azurewebsites.net',
}
const STAGING_URL = {
    baseUrl:'https://portal-staging.hightalk.ai',
    SSOWebUrl:{
        zh:"https://login-staging.hightalk.ai/zh-cn",
        en:'/'
    },
    SSOServerApi:"https://hightalkssoapi-staging.azurewebsites.net", // 注册页面 服务器资源地址
    requestHost: 'https://hightalkadminapi-staging.azurewebsites.net'
}
const PRODUCT_URL = {
    baseUrl:'https://portal.hightalk.online',
    SSOWebUrl:{
        zh:"https://auth.hightalk.online/zh-cn",
        en:'/'
    },
    SSOServerApi:"https://hightalkssoapi-staging.azurewebsites.net", // 注册页面 服务器资源地址
    requestHost: 'https://hightalkadminapi-staging.azurewebsites.net'
}
const Default = {
    baseUrl:'',
    SSOWebUrl:{
        zh:"",
        en:'/'
    },
    SSOServerApi:"", // 注册页面 服务器资源地址
    requestHost: ''
}
export default  Default






















