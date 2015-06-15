/**
 * Name:            Service.js
 * Introduction:   服务配置，由前端人员根据接口文档创建，前端所有调用的服务都在这里配置。
 *                     业务代码里的ajax请求不能写具体的url，统一调用配置文件的url。
 *                     开发人员在联调时将url配置成具体的后台服务url。
 * Author：        徐鹏飞
 * Time:            2015-05-29
 */
define(function() {
  return {
    menu: '_jsons/menu.json'
  }
});