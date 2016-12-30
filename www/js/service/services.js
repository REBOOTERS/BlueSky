angular.module('starter.services', [])

  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [
      {
        "rating": {
          "max": 10,
          "average": 9.6,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "犯罪",
          "剧情"
        ],
        "title": "肖申克的救赎",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1054521/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/17525.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/17525.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/17525.jpg"
            },
            "name": "蒂姆·罗宾斯",
            "id": "1054521"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1054534/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/34642.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/34642.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/34642.jpg"
            },
            "name": "摩根·弗里曼",
            "id": "1054534"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1041179/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/5837.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/5837.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/5837.jpg"
            },
            "name": "鲍勃·冈顿",
            "id": "1041179"
          }
        ],
        "collect_count": 988956,
        "original_title": "The Shawshank Redemption",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1047973/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/230.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/230.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/230.jpg"
            },
            "name": "弗兰克·德拉邦特",
            "id": "1047973"
          }
        ],
        "year": "1994",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p480747492.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p480747492.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480747492.jpg"
        },
        "alt": "https://movie.douban.com/subject/1292052/",
        "id": "1292052"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.4,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "动作",
          "犯罪"
        ],
        "title": "这个杀手不太冷",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1025182/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/8833.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/8833.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/8833.jpg"
            },
            "name": "让·雷诺",
            "id": "1025182"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1054454/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/2274.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/2274.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/2274.jpg"
            },
            "name": "娜塔莉·波特曼",
            "id": "1054454"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1010507/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/104.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/104.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/104.jpg"
            },
            "name": "加里·奥德曼",
            "id": "1010507"
          }
        ],
        "collect_count": 957486,
        "original_title": "Léon",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1031876/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/33301.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/33301.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/33301.jpg"
            },
            "name": "吕克·贝松",
            "id": "1031876"
          }
        ],
        "year": "1994",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p511118051.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p511118051.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p511118051.jpg"
        },
        "alt": "https://movie.douban.com/subject/1295644/",
        "id": "1295644"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.5,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "爱情",
          "同性"
        ],
        "title": "霸王别姬",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1003494/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/67.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/67.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/67.jpg"
            },
            "name": "张国荣",
            "id": "1003494"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1050265/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/10381.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/10381.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/10381.jpg"
            },
            "name": "张丰毅",
            "id": "1050265"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1035641/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/1399268395.47.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/1399268395.47.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/1399268395.47.jpg"
            },
            "name": "巩俐",
            "id": "1035641"
          }
        ],
        "collect_count": 692762,
        "original_title": "霸王别姬",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1023040/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/750.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/750.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/750.jpg"
            },
            "name": "陈凯歌",
            "id": "1023040"
          }
        ],
        "year": "1993",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p1910813120.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910813120.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910813120.jpg"
        },
        "alt": "https://movie.douban.com/subject/1291546/",
        "id": "1291546"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.4,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "爱情"
        ],
        "title": "阿甘正传",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1054450/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/551.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/551.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/551.jpg"
            },
            "name": "汤姆·汉克斯",
            "id": "1054450"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1002676/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/51737.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/51737.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/51737.jpg"
            },
            "name": "罗宾·怀特",
            "id": "1002676"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1031848/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/1345.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/1345.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/1345.jpg"
            },
            "name": "加里·西尼斯",
            "id": "1031848"
          }
        ],
        "collect_count": 861002,
        "original_title": "Forrest Gump",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1053564/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/505.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/505.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/505.jpg"
            },
            "name": "罗伯特·泽米吉斯",
            "id": "1053564"
          }
        ],
        "year": "1994",
        "images": {
          "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p510876377.jpg",
          "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p510876377.jpg",
          "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p510876377.jpg"
        },
        "alt": "https://movie.douban.com/subject/1292720/",
        "id": "1292720"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.5,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "喜剧",
          "爱情"
        ],
        "title": "美丽人生",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1041004/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/26764.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/26764.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/26764.jpg"
            },
            "name": "罗伯托·贝尼尼",
            "id": "1041004"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1000375/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/9548.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/9548.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/9548.jpg"
            },
            "name": "尼可莱塔·布拉斯基",
            "id": "1000375"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1000368/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/45590.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/45590.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/45590.jpg"
            },
            "name": "乔治·坎塔里尼",
            "id": "1000368"
          }
        ],
        "collect_count": 471413,
        "original_title": "La vita è bella",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1041004/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/26764.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/26764.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/26764.jpg"
            },
            "name": "罗伯托·贝尼尼",
            "id": "1041004"
          }
        ],
        "year": "1997",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p510861873.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p510861873.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p510861873.jpg"
        },
        "alt": "https://movie.douban.com/subject/1292063/",
        "id": "1292063"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.2,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "动画",
          "奇幻"
        ],
        "title": "千与千寻",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1023337/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/1463193210.13.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/1463193210.13.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/1463193210.13.jpg"
            },
            "name": "柊瑠美",
            "id": "1023337"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1005438/",
            "avatars": {
              "small": "https://img5.doubanio.com/img/celebrity/small/44986.jpg",
              "large": "https://img5.doubanio.com/img/celebrity/large/44986.jpg",
              "medium": "https://img5.doubanio.com/img/celebrity/medium/44986.jpg"
            },
            "name": "入野自由",
            "id": "1005438"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1045797/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/18785.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/18785.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/18785.jpg"
            },
            "name": "夏木真理",
            "id": "1045797"
          }
        ],
        "collect_count": 766397,
        "original_title": "千と千尋の神隠し",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1054439/",
            "avatars": {
              "small": "https://img5.doubanio.com/img/celebrity/small/616.jpg",
              "large": "https://img5.doubanio.com/img/celebrity/large/616.jpg",
              "medium": "https://img5.doubanio.com/img/celebrity/medium/616.jpg"
            },
            "name": "宫崎骏",
            "id": "1054439"
          }
        ],
        "year": "2001",
        "images": {
          "small": "https://img5.doubanio.com/view/movie_poster_cover/ipst/public/p1910830216.jpg",
          "large": "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p1910830216.jpg",
          "medium": "https://img5.doubanio.com/view/movie_poster_cover/spst/public/p1910830216.jpg"
        },
        "alt": "https://movie.douban.com/subject/1291561/",
        "id": "1291561"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.4,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "历史",
          "战争"
        ],
        "title": "辛德勒的名单",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1031220/",
            "avatars": {
              "small": "https://img5.doubanio.com/img/celebrity/small/44906.jpg",
              "large": "https://img5.doubanio.com/img/celebrity/large/44906.jpg",
              "medium": "https://img5.doubanio.com/img/celebrity/medium/44906.jpg"
            },
            "name": "连姆·尼森",
            "id": "1031220"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1054393/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/1374649659.58.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/1374649659.58.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/1374649659.58.jpg"
            },
            "name": "本·金斯利",
            "id": "1054393"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1006956/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/28941.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/28941.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/28941.jpg"
            },
            "name": "拉尔夫·费因斯",
            "id": "1006956"
          }
        ],
        "collect_count": 451548,
        "original_title": "Schindler's List",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1054440/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/34602.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/34602.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/34602.jpg"
            },
            "name": "史蒂文·斯皮尔伯格",
            "id": "1054440"
          }
        ],
        "year": "1993",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p492406163.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p492406163.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p492406163.jpg"
        },
        "alt": "https://movie.douban.com/subject/1295124/",
        "id": "1295124"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.2,
          "stars": "45",
          "min": 0
        },
        "genres": [
          "剧情",
          "爱情",
          "灾难"
        ],
        "title": "泰坦尼克号",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1041029/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/470.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/470.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/470.jpg"
            },
            "name": "莱昂纳多·迪卡普里奥",
            "id": "1041029"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1054446/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/53358.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/53358.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/53358.jpg"
            },
            "name": "凯特·温丝莱特",
            "id": "1054446"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1031864/",
            "avatars": {
              "small": "https://img5.doubanio.com/img/celebrity/small/45186.jpg",
              "large": "https://img5.doubanio.com/img/celebrity/large/45186.jpg",
              "medium": "https://img5.doubanio.com/img/celebrity/medium/45186.jpg"
            },
            "name": "比利·赞恩",
            "id": "1031864"
          }
        ],
        "collect_count": 791189,
        "original_title": "Titanic",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1022571/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/33715.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/33715.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/33715.jpg"
            },
            "name": "詹姆斯·卡梅隆",
            "id": "1022571"
          }
        ],
        "year": "1997",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p457760035.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p457760035.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p457760035.jpg"
        },
        "alt": "https://movie.douban.com/subject/1292722/",
        "id": "1292722"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.2,
          "stars": "45",
          "min": 0
        },
        "genres": [
          "剧情",
          "音乐"
        ],
        "title": "海上钢琴师",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1025176/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/6281.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/6281.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/6281.jpg"
            },
            "name": "蒂姆·罗斯",
            "id": "1025176"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1010659/",
            "avatars": {
              "small": "https://img5.doubanio.com/img/celebrity/small/1355152571.6.jpg",
              "large": "https://img5.doubanio.com/img/celebrity/large/1355152571.6.jpg",
              "medium": "https://img5.doubanio.com/img/celebrity/medium/1355152571.6.jpg"
            },
            "name": "普路特·泰勒·文斯",
            "id": "1010659"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1027407/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/12333.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/12333.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/12333.jpg"
            },
            "name": "比尔·努恩",
            "id": "1027407"
          }
        ],
        "collect_count": 717966,
        "original_title": "La leggenda del pianista sull'oceano",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1018983/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/195.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/195.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/195.jpg"
            },
            "name": "朱塞佩·托纳多雷",
            "id": "1018983"
          }
        ],
        "year": "1998",
        "images": {
          "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p511146957.jpg",
          "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p511146957.jpg",
          "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p511146957.jpg"
        },
        "alt": "https://movie.douban.com/subject/1292001/",
        "id": "1292001"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.2,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "动作",
          "科幻"
        ],
        "title": "盗梦空间",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1041029/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/470.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/470.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/470.jpg"
            },
            "name": "莱昂纳多·迪卡普里奥",
            "id": "1041029"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1101703/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/3517.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/3517.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/3517.jpg"
            },
            "name": "约瑟夫·高登-莱维特",
            "id": "1101703"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1012520/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/118.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/118.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/118.jpg"
            },
            "name": "艾伦·佩吉",
            "id": "1012520"
          }
        ],
        "collect_count": 872354,
        "original_title": "Inception",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1054524/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/673.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/673.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/673.jpg"
            },
            "name": "克里斯托弗·诺兰",
            "id": "1054524"
          }
        ],
        "year": "2010",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p513344864.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p513344864.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p513344864.jpg"
        },
        "alt": "https://movie.douban.com/subject/3541415/",
        "id": "3541415"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.3,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "喜剧",
          "爱情",
          "科幻"
        ],
        "title": "机器人总动员",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1009535/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/13028.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/13028.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/13028.jpg"
            },
            "name": "本·贝尔特",
            "id": "1009535"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1000389/",
            "avatars": {
              "small": "https://img5.doubanio.com/img/celebrity/small/1365856130.16.jpg",
              "large": "https://img5.doubanio.com/img/celebrity/large/1365856130.16.jpg",
              "medium": "https://img5.doubanio.com/img/celebrity/medium/1365856130.16.jpg"
            },
            "name": "艾丽莎·奈特",
            "id": "1000389"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1018022/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/31068.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/31068.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/31068.jpg"
            },
            "name": "杰夫·格尔林",
            "id": "1018022"
          }
        ],
        "collect_count": 566298,
        "original_title": "WALL·E",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1036450/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/1302.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/1302.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/1302.jpg"
            },
            "name": "安德鲁·斯坦顿",
            "id": "1036450"
          }
        ],
        "year": "2008",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p449665982.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p449665982.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p449665982.jpg"
        },
        "alt": "https://movie.douban.com/subject/2131459/",
        "id": "2131459"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.1,
          "stars": "45",
          "min": 0
        },
        "genres": [
          "剧情",
          "喜剧",
          "爱情"
        ],
        "title": "三傻大闹宝莱坞",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1031931/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/13628.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/13628.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/13628.jpg"
            },
            "name": "阿米尔·汗",
            "id": "1031931"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1049635/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/5568.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/5568.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/5568.jpg"
            },
            "name": "卡琳娜·卡普尔",
            "id": "1049635"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1018290/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/5651.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/5651.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/5651.jpg"
            },
            "name": "马达范",
            "id": "1018290"
          }
        ],
        "collect_count": 746108,
        "original_title": "3 Idiots",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1286677/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/16549.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/16549.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/16549.jpg"
            },
            "name": "拉吉库马尔·希拉尼",
            "id": "1286677"
          }
        ],
        "year": "2009",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p579729551.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p579729551.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p579729551.jpg"
        },
        "alt": "https://movie.douban.com/subject/3793023/",
        "id": "3793023"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.2,
          "stars": "45",
          "min": 0
        },
        "genres": [
          "剧情",
          "音乐"
        ],
        "title": "放牛班的春天",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1048281/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/3363.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/3363.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/3363.jpg"
            },
            "name": "杰拉尔·朱诺",
            "id": "1048281"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1036712/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/32697.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/32697.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/32697.jpg"
            },
            "name": "让-巴蒂斯特·莫尼耶",
            "id": "1036712"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1054351/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/9329.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/9329.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/9329.jpg"
            },
            "name": "弗朗索瓦·贝利昂",
            "id": "1054351"
          }
        ],
        "collect_count": 532824,
        "original_title": "Les choristes",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1277959/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/24744.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/24744.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/24744.jpg"
            },
            "name": "克里斯托夫·巴拉蒂",
            "id": "1277959"
          }
        ],
        "year": "2004",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p1910824951.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910824951.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910824951.jpg"
        },
        "alt": "https://movie.douban.com/subject/1291549/",
        "id": "1291549"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.2,
          "stars": "45",
          "min": 0
        },
        "genres": [
          "剧情"
        ],
        "title": "忠犬八公的故事",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1040997/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/33013.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/33013.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/33013.jpg"
            },
            "name": "理查·基尔",
            "id": "1040997"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1049499/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/5502.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/5502.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/5502.jpg"
            },
            "name": "萨拉·罗默尔",
            "id": "1049499"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1025215/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/17520.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/17520.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/17520.jpg"
            },
            "name": "琼·艾伦",
            "id": "1025215"
          }
        ],
        "collect_count": 493399,
        "original_title": "Hachi: A Dog's Tale",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1018014/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/4333.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/4333.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/4333.jpg"
            },
            "name": "莱塞·霍尔斯道姆",
            "id": "1018014"
          }
        ],
        "year": "2009",
        "images": {
          "small": "https://img5.doubanio.com/view/movie_poster_cover/ipst/public/p524964016.jpg",
          "large": "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p524964016.jpg",
          "medium": "https://img5.doubanio.com/view/movie_poster_cover/spst/public/p524964016.jpg"
        },
        "alt": "https://movie.douban.com/subject/3011091/",
        "id": "3011091"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.1,
          "stars": "45",
          "min": 0
        },
        "genres": [
          "动作",
          "冒险",
          "喜剧"
        ],
        "title": "大话西游之大圣娶亲",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1048026/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/47421.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/47421.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/47421.jpg"
            },
            "name": "周星驰",
            "id": "1048026"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1016771/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/45481.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/45481.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/45481.jpg"
            },
            "name": "吴孟达",
            "id": "1016771"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1041734/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/5539.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/5539.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/5539.jpg"
            },
            "name": "朱茵",
            "id": "1041734"
          }
        ],
        "collect_count": 535496,
        "original_title": "西遊記大結局之仙履奇緣",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1274431/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/45374.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/45374.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/45374.jpg"
            },
            "name": "刘镇伟",
            "id": "1274431"
          }
        ],
        "year": "1995",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p648365452.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p648365452.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p648365452.jpg"
        },
        "alt": "https://movie.douban.com/subject/1292213/",
        "id": "1292213"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.1,
          "stars": "45",
          "min": 0
        },
        "genres": [
          "动画",
          "奇幻"
        ],
        "title": "龙猫",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1019382/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/1455201170.02.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/1455201170.02.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/1455201170.02.jpg"
            },
            "name": "日高法子",
            "id": "1019382"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1025582/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/29537.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/29537.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/29537.jpg"
            },
            "name": "坂本千夏",
            "id": "1025582"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1037668/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/1356199849.63.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/1356199849.63.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/1356199849.63.jpg"
            },
            "name": "岛本须美",
            "id": "1037668"
          }
        ],
        "collect_count": 501839,
        "original_title": "となりのトトロ",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1054439/",
            "avatars": {
              "small": "https://img5.doubanio.com/img/celebrity/small/616.jpg",
              "large": "https://img5.doubanio.com/img/celebrity/large/616.jpg",
              "medium": "https://img5.doubanio.com/img/celebrity/medium/616.jpg"
            },
            "name": "宫崎骏",
            "id": "1054439"
          }
        ],
        "year": "1988",
        "images": {
          "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p1910829638.jpg",
          "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1910829638.jpg",
          "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1910829638.jpg"
        },
        "alt": "https://movie.douban.com/subject/1291560/",
        "id": "1291560"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.2,
          "stars": "45",
          "min": 0
        },
        "genres": [
          "剧情",
          "犯罪"
        ],
        "title": "教父",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1041025/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/45035.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/45035.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/45035.jpg"
            },
            "name": "马龙·白兰度",
            "id": "1041025"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1054451/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/645.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/645.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/645.jpg"
            },
            "name": "阿尔·帕西诺",
            "id": "1054451"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1000050/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/9550.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/9550.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/9550.jpg"
            },
            "name": "詹姆斯·肯恩",
            "id": "1000050"
          }
        ],
        "collect_count": 414501,
        "original_title": "The Godfather",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1054419/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/592.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/592.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/592.jpg"
            },
            "name": "弗朗西斯·福特·科波拉",
            "id": "1054419"
          }
        ],
        "year": "1972",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p1910907404.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910907404.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910907404.jpg"
        },
        "alt": "https://movie.douban.com/subject/1291841/",
        "id": "1291841"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.2,
          "stars": "50",
          "min": 0
        },
        "genres": [
          "剧情",
          "爱情",
          "战争"
        ],
        "title": "乱世佳人",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1006997/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/5290.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/5290.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/5290.jpg"
            },
            "name": "克拉克·盖博",
            "id": "1006997"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1010506/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/3151.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/3151.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/3151.jpg"
            },
            "name": "费雯·丽",
            "id": "1010506"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1000293/",
            "avatars": {
              "small": "https://img5.doubanio.com/img/celebrity/small/3806.jpg",
              "large": "https://img5.doubanio.com/img/celebrity/large/3806.jpg",
              "medium": "https://img5.doubanio.com/img/celebrity/medium/3806.jpg"
            },
            "name": "莱斯利·霍华德",
            "id": "1000293"
          }
        ],
        "collect_count": 336672,
        "original_title": "Gone with the Wind",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1032275/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/11303.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/11303.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/11303.jpg"
            },
            "name": "维克多·弗莱明",
            "id": "1032275"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1010711/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/19067.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/19067.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/19067.jpg"
            },
            "name": "乔治·库克",
            "id": "1010711"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1012588/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/54831.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/54831.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/54831.jpg"
            },
            "name": "山姆·伍德",
            "id": "1012588"
          }
        ],
        "year": "1939",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p1963126880.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1963126880.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1963126880.jpg"
        },
        "alt": "https://movie.douban.com/subject/1300267/",
        "id": "1300267"
      },
      {
        "rating": {
          "max": 10,
          "average": 9.1,
          "stars": "45",
          "min": 0
        },
        "genres": [
          "剧情",
          "爱情"
        ],
        "title": "天堂电影院",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1277558/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/43502.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/43502.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/43502.jpg"
            },
            "name": "安东娜拉·塔莉",
            "id": "1277558"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1078332/",
            "avatars": {
              "small": "https://img5.doubanio.com/img/celebrity/small/44286.jpg",
              "large": "https://img5.doubanio.com/img/celebrity/large/44286.jpg",
              "medium": "https://img5.doubanio.com/img/celebrity/medium/44286.jpg"
            },
            "name": "恩佐·卡拉瓦勒",
            "id": "1078332"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1074920/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/1371022856.11.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/1371022856.11.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/1371022856.11.jpg"
            },
            "name": "艾萨·丹尼埃利",
            "id": "1074920"
          }
        ],
        "collect_count": 372811,
        "original_title": "Nuovo Cinema Paradiso",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1018983/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/195.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/195.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/195.jpg"
            },
            "name": "朱塞佩·托纳多雷",
            "id": "1018983"
          }
        ],
        "year": "1988",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p1910901025.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910901025.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910901025.jpg"
        },
        "alt": "https://movie.douban.com/subject/1291828/",
        "id": "1291828"
      },
      {
        "rating": {
          "max": 10,
          "average": 9,
          "stars": "45",
          "min": 0
        },
        "genres": [
          "剧情"
        ],
        "title": "楚门的世界",
        "casts": [
          {
            "alt": "https://movie.douban.com/celebrity/1054438/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/615.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/615.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/615.jpg"
            },
            "name": "金·凯瑞",
            "id": "1054438"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1053572/",
            "avatars": {
              "small": "https://img5.doubanio.com/img/celebrity/small/516.jpg",
              "large": "https://img5.doubanio.com/img/celebrity/large/516.jpg",
              "medium": "https://img5.doubanio.com/img/celebrity/medium/516.jpg"
            },
            "name": "劳拉·琳妮",
            "id": "1053572"
          },
          {
            "alt": "https://movie.douban.com/celebrity/1048024/",
            "avatars": {
              "small": "https://img1.doubanio.com/img/celebrity/small/277.jpg",
              "large": "https://img1.doubanio.com/img/celebrity/large/277.jpg",
              "medium": "https://img1.doubanio.com/img/celebrity/medium/277.jpg"
            },
            "name": "艾德·哈里斯",
            "id": "1048024"
          }
        ],
        "collect_count": 501955,
        "original_title": "The Truman Show",
        "subtype": "movie",
        "directors": [
          {
            "alt": "https://movie.douban.com/celebrity/1022721/",
            "avatars": {
              "small": "https://img3.doubanio.com/img/celebrity/small/4360.jpg",
              "large": "https://img3.doubanio.com/img/celebrity/large/4360.jpg",
              "medium": "https://img3.doubanio.com/img/celebrity/medium/4360.jpg"
            },
            "name": "彼得·威尔",
            "id": "1022721"
          }
        ],
        "year": "1998",
        "images": {
          "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p480420695.jpg",
          "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p480420695.jpg",
          "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480420695.jpg"
        },
        "alt": "https://movie.douban.com/subject/1292064/",
        "id": "1292064"
      }
    ];


    // Some fake testing data
    var detail = {
      "rating": {
        "max": 10,
        "average": 9.6,
        "stars": "50",
        "min": 0
      },
      "reviews_count": 4224,
      "wish_count": 69368,
      "douban_site": "",
      "year": "1994",
      "images": {
        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p480747492.jpg",
        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p480747492.jpg",
        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480747492.jpg"
      },
      "alt": "https://movie.douban.com/subject/1292052/",
      "id": "1292052",
      "mobile_url": "https://movie.douban.com/subject/1292052/mobile",
      "title": "肖申克的救赎",
      "do_count": null,
      "share_url": "https://m.douban.com/movie/subject/1292052",
      "seasons_count": null,
      "schedule_url": "",
      "episodes_count": null,
      "countries": [
        "美国"
      ],
      "genres": [
        "犯罪",
        "剧情"
      ],
      "collect_count": 993885,
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1054521/",
          "avatars": {
            "small": "https://img3.doubanio.com/img/celebrity/small/17525.jpg",
            "large": "https://img3.doubanio.com/img/celebrity/large/17525.jpg",
            "medium": "https://img3.doubanio.com/img/celebrity/medium/17525.jpg"
          },
          "name": "蒂姆·罗宾斯",
          "id": "1054521"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1054534/",
          "avatars": {
            "small": "https://img3.doubanio.com/img/celebrity/small/34642.jpg",
            "large": "https://img3.doubanio.com/img/celebrity/large/34642.jpg",
            "medium": "https://img3.doubanio.com/img/celebrity/medium/34642.jpg"
          },
          "name": "摩根·弗里曼",
          "id": "1054534"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1041179/",
          "avatars": {
            "small": "https://img1.doubanio.com/img/celebrity/small/5837.jpg",
            "large": "https://img1.doubanio.com/img/celebrity/large/5837.jpg",
            "medium": "https://img1.doubanio.com/img/celebrity/medium/5837.jpg"
          },
          "name": "鲍勃·冈顿",
          "id": "1041179"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1000095/",
          "avatars": {
            "small": "https://img1.doubanio.com/img/celebrity/small/7827.jpg",
            "large": "https://img1.doubanio.com/img/celebrity/large/7827.jpg",
            "medium": "https://img1.doubanio.com/img/celebrity/medium/7827.jpg"
          },
          "name": "威廉姆·赛德勒",
          "id": "1000095"
        }
      ],
      "current_season": null,
      "original_title": "The Shawshank Redemption",
      "summary": "20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步…… 本片根据著名作家斯蒂芬·金（Stephen Edwin King）的原著改编。©豆瓣",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1047973/",
          "avatars": {
            "small": "https://img3.doubanio.com/img/celebrity/small/230.jpg",
            "large": "https://img3.doubanio.com/img/celebrity/large/230.jpg",
            "medium": "https://img3.doubanio.com/img/celebrity/medium/230.jpg"
          },
          "name": "弗兰克·德拉邦特",
          "id": "1047973"
        }
      ],
      "comments_count": 174469,
      "ratings_count": 756569,
      "aka": [
        "月黑高飞(港)",
        "刺激1995(台)",
        "地狱诺言",
        "铁窗岁月",
        "消香克的救赎"
      ]
    };


    return {


      allDetail: function () {
        return detail;
      },
      /**
       * 返回所有系列
       * @returns {string}
       */
      genresStr: function () {
        var genre = '';
        for (var i = 0; i < detail.genres.length; i++) {
          genre = genre + detail.genres[i] + '/';
        }
        return genre.substring(0, genre.length - 1);
      },
      /**
       * 别名拼接
       * @returns {string}
       */
      getAlias: function () {
        var alias = '';
        for(var i=0;i<detail.aka.length;i++) {
          alias=alias+detail.aka[i]+'/';
        }
        return alias.substring(0, alias.length - 1);
      },

      getCountries: function () {
        var countries = '';
        for(var i=0;i<detail.countries.length;i++) {
          countries=countries+detail.countries[i]+'/';
        }
        return countries.substring(0, countries.length - 1);
      },



      /*全部数据*/
      all: function () {
        return chats;
      },

      /**
       * 演员拼接
       * @param index
       * @returns {string}
       */
      casts: function (index) {
        var casts = '';
        var chat = chats[index];
        for (var i = 0; i < chat.casts.length; i++) {
          casts = casts + chat.casts[i].name + '/';
        }
        return casts.substring(0, casts.length - 1);
      },
      /**
       * 所有导演数据拼接
       * @param index
       */
      directors: function (index) {
        var directors = '';
        var chat = chats[index];
        for (var i = 0; i < chat.directors.length; i++) {
          directors = directors + chat.directors[i].name + '/';
        }
        return directors.substring(0, directors.length - 1);
      },


      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  });
