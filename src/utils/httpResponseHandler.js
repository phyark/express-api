/*
 * @Description: 这是***页面（组件）
 * @Date: 2023-03-13 17:10:39
 * @Author: liukunjia
 * @LastEditors: liukunjia
 * @LastEditTime: 2023-03-14 15:11:25
 */
/**
 * 标准响应函数
 * @param {Object} res HTTP响应对象
 * @param {Number} statusCode HTTP状态码
 * @param {Boolean} code 响应码
 * @param {String} message 响应消息
 * @param {Object} data 响应数据
 */

const sendResponse = (res, statusCode, code, message, data) => {
  const response = {
    code,
    message,
    data
  };
  return res.status(statusCode).json(response);
};

/**
 * 成功响应函数
 * @param {Object} res HTTP响应对象
 * @param {Object} data 响应数据
 * @param {String} message 响应消息
 */
const sendSuccess = (res, data, message = '操作成功') => {
  return sendResponse(res, 200, 200, message, data);
};

/**
 * 错误响应函数
 * @param {Object} res HTTP响应对象
 * @param {Number} code 响应码
 * @param {String} message 错误消息
 */
const sendError = (res, code, message) => {
  return sendResponse(res, 200, code, message, null);
};

module.exports = {
  sendResponse,
  sendSuccess,
  sendError
};
