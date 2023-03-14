/* 在本地创建 www 用户密码为 www */
CREATE user 'www' @'%' identified by 'www';

/* 赋予本地 www 用户 在 admin_server 库，全权限  */
GRANT all privileges on admin_server.* to 'www' @'%' with grant option;

/* 更新权限配置 */
flush privileges;

DROP DATABASE IF EXISTS `admin_server`;

CREATE DATABASE `admin_server`;

Use `admin_server`;

/* 创建用户表 */
CREATE TABLE `Users`(
  `id` INT UNSIGNED AUTO_INCREMENT KEY COMMENT '用户ID',
  `phone` VARCHAR(20) comment "手机号",
  `username` VARCHAR(100) NOT NULL UNIQUE comment "用户名",
  `password` VARCHAR(100) NOT NULL comment "密码",
	`create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `last_time` datetime DEFAULT NULL comment "最近登录时间",
  `version` BIGINT DEFAULT NULL comment "版本"
) ENGINE = "INNODB" DEFAULT CHARSET = "UTF8";

/* 插入数据 */
INSERT INTO users(username,password) VALUES ('admin', '123456');