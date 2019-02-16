/*
Navicat MySQL Data Transfer

Source Server         : luoping
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : maikefen

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-11-23 13:46:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lives`
-- ----------------------------
DROP TABLE IF EXISTS `lives`;
CREATE TABLE `lives` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url0` varchar(100) NOT NULL,
  `url1` varchar(100) NOT NULL,
  `url2` varchar(100) NOT NULL,
  `url3` varchar(100) NOT NULL,
  `url4` varchar(100) NOT NULL,
  `title` varchar(40) NOT NULL,
  `price` float(6,2) unsigned NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lives
-- ----------------------------
INSERT INTO `lives` VALUES ('1', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/09/3_05905757487527204_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/09/3_05905759390745784_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/09/3_05905759410575943_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/09/3_05905759429894049_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/09/3_05905759452420962_1280.jpg', '京造 便携旅行套装 充气U型枕+眼罩+收纳袋 深灰色', '45.00');
INSERT INTO `lives` VALUES ('2', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/07/3_05845469910829166_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/07/3_05845470670640376_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/07/3_05845470689530854_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/07/3_05845470703085542_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/07/3_05845470721520437_1280.jpg', '京造 小风扇便携迷你手持电风扇 USB充电静音风扇', '44.90');
INSERT INTO `lives` VALUES ('3', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/05/3_05805737840308193_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/05/3_05805737861642382_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/05/3_05805737879175555_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/05/3_05805737900203973_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/05/3_05805737919233621_1280.jpg', '京造 极简主义都市双肩背包 休闲商务笔记本电脑包14英寸-15.6英寸 男女书包', '79.00');
INSERT INTO `lives` VALUES ('4', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/08/3_05866037166808466_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/08/3_05866038585499941_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/08/3_05866038599199363_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/08/3_05866038612922477_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/08/3_05866038626608813_1280.jpg', '京造 微电流滚轮V脸美容器 脸部按摩仪 面部提拉紧致按摩器', '179.00');
INSERT INTO `lives` VALUES ('5', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/09/3_05893697970309775_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/09/3_05893699540034271_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/09/3_05893699555516101_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/09/3_05893699572877511_1280.jpg', 'http://www.51mkf.com/data/upload/shop/store/goods/3/2018/09/3_05893699589636654_1280.jpg', '京造X乐范 眼部冷热按摩仪 冰暖双感护眼仪 硅胶颗粒振动焕活美眼仪 粉色', '339.00');

-- ----------------------------
-- Table structure for `registor`
-- ----------------------------
DROP TABLE IF EXISTS `registor`;
CREATE TABLE `registor` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) NOT NULL,
  `pass` varchar(40) NOT NULL,
  `redate` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registor
-- ----------------------------
INSERT INTO `registor` VALUES ('1', '12345678945', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-03 09:03:42');
INSERT INTO `registor` VALUES ('2', '12345674111', '25f9e794323b453885f5181f1b624d0b', '2018-11-03 09:17:40');
INSERT INTO `registor` VALUES ('3', '12345678911', '25f9e794323b453885f5181f1b624d0b', '2018-11-03 09:38:30');
INSERT INTO `registor` VALUES ('4', '12345678911', '96e79218965eb72c92a549dd5a330112', '2018-11-03 09:41:39');
INSERT INTO `registor` VALUES ('5', '18070252214', 'fbe82b93c071bedda31afded400cca52', '2018-11-05 09:22:46');
INSERT INTO `registor` VALUES ('6', '12345678912', 'faf5341a39919352a4f9bde4d6de5396', '2018-11-20 21:03:48');
INSERT INTO `registor` VALUES ('7', '12345678912', 'faf5341a39919352a4f9bde4d6de5396', '2018-11-20 21:04:02');
INSERT INTO `registor` VALUES ('8', '18070252214', '9f1aa6db1f0da64c968fe6c5bb2ba27e', '2018-11-23 13:37:05');
