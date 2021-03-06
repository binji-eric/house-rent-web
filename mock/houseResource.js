// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  "GET /haoke/resource": function(req, res) {
    // const responseObj = [
    //     {
    //         id: '1001',
    //         info: '1001',
    //         pic: '1001',
    //         weituoRen: '1001'
    //     },
    //     {
    //         id: '1001',
    //         info: '1001',
    //         pic: '1001',
    //         weituoRen: '1001'
    //     }
    // ];
    const result = {
      list: [
        {
          key: 0,
          disabled: true,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 0",
          title: "一个任务名称 0",
          owner: "曲丽丽",
          desc: "111这是一段描述",
          callNo: 903,
          status: 1,
          updatedAt: "2017-06-30T16:00:00.000Z",
          createdAt: "2017-06-30T16:00:00.000Z",
          progress: 42
        },
        {
          key: 1,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 1",
          title: "一个任务名称 1",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 742,
          status: 0,
          updatedAt: "2017-06-30T16:00:00.000Z",
          createdAt: "2017-06-30T16:00:00.000Z",
          progress: 54
        },
        {
          key: 2,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 2",
          title: "一个任务名称 2",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 905,
          status: 2,
          updatedAt: "2017-07-01T16:00:00.000Z",
          createdAt: "2017-07-01T16:00:00.000Z",
          progress: 8
        },
        {
          key: 3,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 3",
          title: "一个任务名称 3",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 535,
          status: 2,
          updatedAt: "2017-07-01T16:00:00.000Z",
          createdAt: "2017-07-01T16:00:00.000Z",
          progress: 23
        },
        {
          key: 4,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 4",
          title: "一个任务名称 4",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 116,
          status: 1,
          updatedAt: "2017-07-02T16:00:00.000Z",
          createdAt: "2017-07-02T16:00:00.000Z",
          progress: 55
        },
        {
          key: 5,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 5",
          title: "一个任务名称 5",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 970,
          status: 1,
          updatedAt: "2017-07-02T16:00:00.000Z",
          createdAt: "2017-07-02T16:00:00.000Z",
          progress: 46
        },
        {
          key: 6,
          disabled: true,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 6",
          title: "一个任务名称 6",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 379,
          status: 0,
          updatedAt: "2017-07-03T16:00:00.000Z",
          createdAt: "2017-07-03T16:00:00.000Z",
          progress: 4
        },
        {
          key: 7,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 7",
          title: "一个任务名称 7",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 895,
          status: 0,
          updatedAt: "2017-07-03T16:00:00.000Z",
          createdAt: "2017-07-03T16:00:00.000Z",
          progress: 6
        },
        {
          key: 8,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 8",
          title: "一个任务名称 8",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 901,
          status: 0,
          updatedAt: "2017-07-04T16:00:00.000Z",
          createdAt: "2017-07-04T16:00:00.000Z",
          progress: 94
        },
        {
          key: 9,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 9",
          title: "一个任务名称 9",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 355,
          status: 2,
          updatedAt: "2017-07-04T16:00:00.000Z",
          createdAt: "2017-07-04T16:00:00.000Z",
          progress: 53
        },
        {
          key: 10,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 10",
          title: "一个任务名称 10",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 469,
          status: 1,
          updatedAt: "2017-07-05T16:00:00.000Z",
          createdAt: "2017-07-05T16:00:00.000Z",
          progress: 59
        },
        {
          key: 11,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 11",
          title: "一个任务名称 11",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 141,
          status: 0,
          updatedAt: "2017-07-05T16:00:00.000Z",
          createdAt: "2017-07-05T16:00:00.000Z",
          progress: 88
        },
        {
          key: 12,
          disabled: true,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 12",
          title: "一个任务名称 12",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 840,
          status: 2,
          updatedAt: "2017-07-06T16:00:00.000Z",
          createdAt: "2017-07-06T16:00:00.000Z",
          progress: 7
        },
        {
          key: 13,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 13",
          title: "一个任务名称 13",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 823,
          status: 2,
          updatedAt: "2017-07-06T16:00:00.000Z",
          createdAt: "2017-07-06T16:00:00.000Z",
          progress: 50
        },
        {
          key: 14,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 14",
          title: "一个任务名称 14",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 935,
          status: 1,
          updatedAt: "2017-07-07T16:00:00.000Z",
          createdAt: "2017-07-07T16:00:00.000Z",
          progress: 89
        },
        {
          key: 15,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 15",
          title: "一个任务名称 15",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 847,
          status: 0,
          updatedAt: "2017-07-07T16:00:00.000Z",
          createdAt: "2017-07-07T16:00:00.000Z",
          progress: 35
        },
        {
          key: 16,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 16",
          title: "一个任务名称 16",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 514,
          status: 0,
          updatedAt: "2017-07-08T16:00:00.000Z",
          createdAt: "2017-07-08T16:00:00.000Z",
          progress: 40
        },
        {
          key: 17,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 17",
          title: "一个任务名称 17",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 867,
          status: 0,
          updatedAt: "2017-07-08T16:00:00.000Z",
          createdAt: "2017-07-08T16:00:00.000Z",
          progress: 56
        },
        {
          key: 18,
          disabled: true,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 18",
          title: "一个任务名称 18",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 411,
          status: 1,
          updatedAt: "2017-07-10T00:00:00.000Z",
          createdAt: "2017-07-10T00:00:00.000Z",
          progress: 33
        },
        {
          key: 19,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 19",
          title: "一个任务名称 19",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 907,
          status: 0,
          updatedAt: "2017-07-10T00:00:00.000Z",
          createdAt: "2017-07-10T00:00:00.000Z",
          progress: 30
        },
        {
          key: 20,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 20",
          title: "一个任务名称 20",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 762,
          status: 3,
          updatedAt: "2017-07-11T00:00:00.000Z",
          createdAt: "2017-07-11T00:00:00.000Z",
          progress: 38
        },
        {
          key: 21,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 21",
          title: "一个任务名称 21",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 731,
          status: 0,
          updatedAt: "2017-07-11T00:00:00.000Z",
          createdAt: "2017-07-11T00:00:00.000Z",
          progress: 3
        },
        {
          key: 22,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 22",
          title: "一个任务名称 22",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 115,
          status: 3,
          updatedAt: "2017-07-12T00:00:00.000Z",
          createdAt: "2017-07-12T00:00:00.000Z",
          progress: 57
        },
        {
          key: 23,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 23",
          title: "一个任务名称 23",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 133,
          status: 2,
          updatedAt: "2017-07-12T00:00:00.000Z",
          createdAt: "2017-07-12T00:00:00.000Z",
          progress: 77
        },
        {
          key: 24,
          disabled: true,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 24",
          title: "一个任务名称 24",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 184,
          status: 0,
          updatedAt: "2017-07-13T00:00:00.000Z",
          createdAt: "2017-07-13T00:00:00.000Z",
          progress: 97
        },
        {
          key: 25,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 25",
          title: "一个任务名称 25",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 776,
          status: 2,
          updatedAt: "2017-07-13T00:00:00.000Z",
          createdAt: "2017-07-13T00:00:00.000Z",
          progress: 20
        },
        {
          key: 26,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 26",
          title: "一个任务名称 26",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 463,
          status: 0,
          updatedAt: "2017-07-14T00:00:00.000Z",
          createdAt: "2017-07-14T00:00:00.000Z",
          progress: 37
        },
        {
          key: 27,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 27",
          title: "一个任务名称 27",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 892,
          status: 2,
          updatedAt: "2017-07-14T00:00:00.000Z",
          createdAt: "2017-07-14T00:00:00.000Z",
          progress: 45
        },
        {
          key: 28,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 28",
          title: "一个任务名称 28",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 611,
          status: 3,
          updatedAt: "2017-07-15T00:00:00.000Z",
          createdAt: "2017-07-15T00:00:00.000Z",
          progress: 90
        },
        {
          key: 29,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 29",
          title: "一个任务名称 29",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 720,
          status: 3,
          updatedAt: "2017-07-15T00:00:00.000Z",
          createdAt: "2017-07-15T00:00:00.000Z",
          progress: 33
        },
        {
          key: 30,
          disabled: true,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 30",
          title: "一个任务名称 30",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 968,
          status: 1,
          updatedAt: "2017-07-16T00:00:00.000Z",
          createdAt: "2017-07-16T00:00:00.000Z",
          progress: 58
        },
        {
          key: 31,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 31",
          title: "一个任务名称 31",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 288,
          status: 3,
          updatedAt: "2017-07-16T00:00:00.000Z",
          createdAt: "2017-07-16T00:00:00.000Z",
          progress: 2
        },
        {
          key: 32,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 32",
          title: "一个任务名称 32",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 58,
          status: 2,
          updatedAt: "2017-07-17T00:00:00.000Z",
          createdAt: "2017-07-17T00:00:00.000Z",
          progress: 79
        },
        {
          key: 33,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 33",
          title: "一个任务名称 33",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 140,
          status: 1,
          updatedAt: "2017-07-17T00:00:00.000Z",
          createdAt: "2017-07-17T00:00:00.000Z",
          progress: 69
        },
        {
          key: 34,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 34",
          title: "一个任务名称 34",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 175,
          status: 1,
          updatedAt: "2017-07-18T00:00:00.000Z",
          createdAt: "2017-07-18T00:00:00.000Z",
          progress: 57
        },
        {
          key: 35,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 35",
          title: "一个任务名称 35",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 678,
          status: 1,
          updatedAt: "2017-07-18T00:00:00.000Z",
          createdAt: "2017-07-18T00:00:00.000Z",
          progress: 64
        },
        {
          key: 36,
          disabled: true,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 36",
          title: "一个任务名称 36",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 199,
          status: 3,
          updatedAt: "2017-07-19T00:00:00.000Z",
          createdAt: "2017-07-19T00:00:00.000Z",
          progress: 60
        },
        {
          key: 37,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 37",
          title: "一个任务名称 37",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 411,
          status: 1,
          updatedAt: "2017-07-19T00:00:00.000Z",
          createdAt: "2017-07-19T00:00:00.000Z",
          progress: 46
        },
        {
          key: 38,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 38",
          title: "一个任务名称 38",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 611,
          status: 3,
          updatedAt: "2017-07-20T00:00:00.000Z",
          createdAt: "2017-07-20T00:00:00.000Z",
          progress: 29
        },
        {
          key: 39,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 39",
          title: "一个任务名称 39",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 12,
          status: 3,
          updatedAt: "2017-07-20T00:00:00.000Z",
          createdAt: "2017-07-20T00:00:00.000Z",
          progress: 62
        },
        {
          key: 40,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 40",
          title: "一个任务名称 40",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 289,
          status: 2,
          updatedAt: "2017-07-21T00:00:00.000Z",
          createdAt: "2017-07-21T00:00:00.000Z",
          progress: 37
        },
        {
          key: 41,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 41",
          title: "一个任务名称 41",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 972,
          status: 1,
          updatedAt: "2017-07-21T00:00:00.000Z",
          createdAt: "2017-07-21T00:00:00.000Z",
          progress: 26
        },
        {
          key: 42,
          disabled: true,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 42",
          title: "一个任务名称 42",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 555,
          status: 0,
          updatedAt: "2017-07-22T00:00:00.000Z",
          createdAt: "2017-07-22T00:00:00.000Z",
          progress: 58
        },
        {
          key: 43,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 43",
          title: "一个任务名称 43",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 602,
          status: 2,
          updatedAt: "2017-07-22T00:00:00.000Z",
          createdAt: "2017-07-22T00:00:00.000Z",
          progress: 78
        },
        {
          key: 44,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 44",
          title: "一个任务名称 44",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 365,
          status: 0,
          updatedAt: "2017-07-23T00:00:00.000Z",
          createdAt: "2017-07-23T00:00:00.000Z",
          progress: 57
        },
        {
          key: 45,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 45",
          title: "一个任务名称 45",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 618,
          status: 2,
          updatedAt: "2017-07-23T00:00:00.000Z",
          createdAt: "2017-07-23T00:00:00.000Z",
          progress: 72
        }
      ],
      pagination: { total: 46, pageSize: 10, current: 1 }
    };
    return res.json(result);
  }
};
