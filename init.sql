/* 在本地创建 www 用户密码为 www */
CREATE user 'www'@'%' identified by 'www';

/* 赋予本地 www 用户 在 test 库，全权限  */
GRANT all privileges on test.* to 'www'@'%' with grant option;

/* 更新权限配置 */
flush privileges;

/* 创建用户表 */
CREATE TABLE Users(
  id VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  createTime BIGINT NOT NULL,
  lastTime BIGINT NOT NULL,
  version BIGINT NOT NULL,
  primary Key(id),
) engine=innodb;