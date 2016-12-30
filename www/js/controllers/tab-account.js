/**
 * Created by Rookie_rebooters on 2016/12/8.
 */
angular.module('starter.controllers')
  .controller('AccountCtrl', function ($scope, $ionicTabsDelegate, $timeout) {




    $scope.doRefresh = function () {
      $timeout(function () {
        $scope.$broadcast('scroll.refreshComplete');
      }, 2000);
    };


    $scope.indexDatas = [

      {
        "_id": "15081130",
        "title": "意大利建筑师安德烈亚·帕拉弟奥诞生",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201202/12/152472012244033.jpg",
        "year": 1508,
        "month": 11,
        "day": 30,
        "des": "在508年前的今天，1508年11月30日 (农历冬月初八)，意大利建筑师安德烈亚·帕拉弟奥诞生。",
        "lunar": "戊辰年冬月初八"
      },
      {
        "_id": "16211130",
        "title": "明末奢崇明发动叛乱，建立大梁国，史称“奢安之乱”",
        "pic": "",
        "year": 1621,
        "month": 11,
        "day": 30,
        "des": "在395年前的今天，1621年11月30日 (农历十月十八)，明末奢崇明发动叛乱，建立大梁国，史称“奢安之乱”。",
        "lunar": "辛酉年十月十八"
      },
      {
        "_id": "16471130",
        "title": "积分学先驱者之一卡瓦列里逝世",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201111/30/73124914125.BMP",
        "year": 1647,
        "month": 11,
        "day": 30,
        "des": "在369年前的今天，1647年11月30日 (农历冬月初五)，积分学先驱者之一卡瓦列里逝世。",
        "lunar": "丁亥年冬月初五"
      },
      {
        "_id": "18351130",
        "title": "讽刺文学大师马克·吐温诞辰",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/200411/30/77231658181.jpg",
        "year": 1835,
        "month": 11,
        "day": 30,
        "des": "在181年前的今天，1835年11月30日 (农历十月十一)，讽刺文学大师马克·吐温诞辰。",
        "lunar": "乙未年十月十一"
      },
      {
        "_id": "18531130",
        "title": "俄罗斯帝国黑海舰队突袭了奥斯曼帝国的锡诺普港",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201111/30/B9125743853.jpg",
        "year": 1853,
        "month": 11,
        "day": 30,
        "des": "在163年前的今天，1853年11月30日 (农历十月三十)，俄罗斯帝国黑海舰队突袭了奥斯曼帝国的锡诺普港。",
        "lunar": "癸丑年十月三十"
      },
      {
        "_id": "18641130",
        "title": "锡诺普海战爆发",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201111/30/9D13722293.jpg",
        "year": 1864,
        "month": 11,
        "day": 30,
        "des": "在152年前的今天，1864年11月30日 (农历冬月初二)，锡诺普海战爆发。",
        "lunar": "甲子年冬月初二"
      },
      {
        "_id": "18691130",
        "title": "瑞典物理学家尼尔斯·古斯塔夫·达伦出生",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201111/30/F0125035864.jpg",
        "year": 1869,
        "month": 11,
        "day": 30,
        "des": "在147年前的今天，1869年11月30日 (农历十月廿七)，瑞典物理学家尼尔斯·古斯塔夫·达伦出生。",
        "lunar": "己巳年十月廿七"
      },
      {
        "_id": "18741130",
        "title": "英国首相丘吉尔诞辰",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/200411/30/7C23179887.jpg",
        "year": 1874,
        "month": 11,
        "day": 30,
        "des": "在142年前的今天，1874年11月30日 (农历十月廿二)，英国首相丘吉尔诞辰。",
        "lunar": "甲戌年十月廿二"
      },
      {
        "_id": "19001130",
        "title": "我国电影事业的奠基人夏衍出生",
        "pic": "",
        "year": 1900,
        "month": 11,
        "day": 30,
        "des": "在116年前的今天，1900年11月30日 (农历十月初九)，我国电影事业的奠基人夏衍出生。",
        "lunar": "庚子年十月初九"
      },
      {
        "_id": "19011130",
        "title": "溥俊被撤去大阿哥名号",
        "pic": "",
        "year": 1901,
        "month": 11,
        "day": 30,
        "des": "在115年前的今天，1901年11月30日 (农历十月二十)，溥俊被撤去大阿哥名号。",
        "lunar": "辛丑年十月二十"
      },
      {
        "_id": "19031130",
        "title": "解放军高级将领杨至成生于贵州省三穗县",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201111/30/C414940296.jpg",
        "year": 1903,
        "month": 11,
        "day": 30,
        "des": "在113年前的今天，1903年11月30日 (农历十月十二)，解放军高级将领杨至成生于贵州省三穗县。",
        "lunar": "癸卯年十月十二"
      },
      {
        "_id": "19161130",
        "title": "奥地利执政68年的国王约瑟夫二世去世",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/200905/17/2E231757352.jpg",
        "year": 1916,
        "month": 11,
        "day": 30,
        "des": "在100年前的今天，1916年11月30日 (农历冬月初六)，奥地利执政68年的国王约瑟夫二世去世。",
        "lunar": "丙辰年冬月初六"
      },
      {
        "_id": "19391130",
        "title": "苏联与芬兰战争爆发",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/200905/17/E423151519.jpg",
        "year": 1939,
        "month": 11,
        "day": 30,
        "des": "在77年前的今天，1939年11月30日 (农历十月二十)，苏联与芬兰战争爆发。",
        "lunar": "己卯年十月二十"
      },
      {
        "_id": "19401130",
        "title": "日本政府宣布承认汪精卫政权",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201111/30/DA125455496.jpg",
        "year": 1940,
        "month": 11,
        "day": 30,
        "des": "在76年前的今天，1940年11月30日 (农历冬月初二)，日本政府宣布承认汪精卫政权。",
        "lunar": "庚辰年冬月初二"
      },
      {
        "_id": "19411130",
        "title": "英军在利比亚发动攻势切断敌供给线",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/200905/17/AB231454666.jpg",
        "year": 1941,
        "month": 11,
        "day": 30,
        "des": "在75年前的今天，1941年11月30日 (农历十月十二)，英军在利比亚发动攻势切断敌供给线。",
        "lunar": "辛巳年十月十二"
      },
      {
        "_id": "19491130",
        "title": "重庆解放",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/200411/30/A3231721358.jpg",
        "year": 1949,
        "month": 11,
        "day": 30,
        "des": "1949年11月30日 (农历十月十一)，重庆解放。",
        "lunar": "己丑年十月十一"
      },
      {
        "_id": "19681130",
        "title": "著名主持人许戈辉出生",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201106/12/F6165054977.jpg",
        "year": 1968,
        "month": 11,
        "day": 30,
        "des": "1968年11月30日 (农历十月十一)，著名主持人许戈辉出生。",
        "lunar": "戊申年十月十一"
      },
      {
        "_id": "19691130",
        "title": "越战中的美莱村大屠杀被揭发",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/200905/17/3C231147186.jpg",
        "year": 1969,
        "month": 11,
        "day": 30,
        "des": "1969年11月30日 (农历十月廿一)，越战中的美莱村大屠杀被揭发。",
        "lunar": "己酉年十月廿一"
      },
      {
        "_id": "19691130m1",
        "title": "陶铸在文革中含冤病逝",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/200905/17/BA231150738.jpg",
        "year": 1969,
        "month": 11,
        "day": 30,
        "des": "1969年11月30日 (农历十月廿一)，陶铸在文革中含冤病逝。",
        "lunar": "己酉年十月廿一"
      },
      {
        "_id": "19771130",
        "title": "中国近代物理学先驱吴有训逝世",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201111/30/0B123957296.jpg",
        "year": 1977,
        "month": 11,
        "day": 30,
        "des": "1977年11月30日 (农历十月二十)，中国近代物理学先驱吴有训逝世。",
        "lunar": "丁巳年十月二十"
      },
      {
        "_id": "19861130",
        "title": "影星加里·格兰特去世",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/200905/17/A423729542.jpg",
        "year": 1986,
        "month": 11,
        "day": 30,
        "des": "1986年11月30日 (农历十月廿九)，影星加里·格兰特去世。",
        "lunar": "丙寅年十月廿九"
      },
      {
        "_id": "19861130m1",
        "title": "全国第一个舆论研究机构成立",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201111/30/B013536130.jpg",
        "year": 1986,
        "month": 11,
        "day": 30,
        "des": "1986年11月30日 (农历十月廿九)，全国第一个舆论研究机构成立。",
        "lunar": "丙寅年十月廿九"
      },
      {
        "_id": "19911130",
        "title": "首届世界女子足球锦标赛落幕",
        "pic": "",
        "year": 1991,
        "month": 11,
        "day": 30,
        "des": "1991年11月30日 (农历十月廿五)，首届世界女子足球锦标赛落幕。",
        "lunar": "辛未年十月廿五"
      },
      {
        "_id": "19931130",
        "title": "中国性病艾滋病防治协会成立",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201111/30/02123359426.jpg",
        "year": 1993,
        "month": 11,
        "day": 30,
        "des": "1993年11月30日 (农历十月十七)，中国性病艾滋病防治协会成立。",
        "lunar": "癸酉年十月十七"
      },
      {
        "_id": "19941130",
        "title": "北京养犬有了法律说法",
        "pic": "",
        "year": 1994,
        "month": 11,
        "day": 30,
        "des": "1994年11月30日 (农历十月廿八)，北京养犬有了法律说法。",
        "lunar": "甲戌年十月廿八"
      },
      {
        "_id": "19981130m1",
        "title": "话剧演员谭宗尧逝世",
        "pic": "",
        "year": 1998,
        "month": 11,
        "day": 30,
        "des": "1998年11月30日 (农历十月十二)，话剧演员谭宗尧逝世。",
        "lunar": "戊寅年十月十二"
      },
      {
        "_id": "19981130",
        "title": "柬埔寨王国联合政府成立",
        "pic": "",
        "year": 1998,
        "month": 11,
        "day": 30,
        "des": "1998年11月30日 (农历十月十二)，柬埔寨王国联合政府成立。",
        "lunar": "戊寅年十月十二"
      },
      {
        "_id": "20101130",
        "title": "湖南娄底一中老师下跪事件",
        "pic": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201012/9/71101539641.jpg",
        "year": 2010,
        "month": 11,
        "day": 30,
        "des": "2010年11月30日 (农历十月廿五)，湖南娄底一中老师下跪事件。",
        "lunar": "庚寅年十月廿五"
      }
    ];
  });
