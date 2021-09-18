const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
  data: {
    goodsCount: 0,
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    floorGoods: [],
    banner: [],
    channel: []
  },
  onShareAppMessage: function () {
    return {
      title: 'shop',
      desc: 'shop',
      path: '/pages/index/index'
    }
  },

  getIndexData: function () {
    let that = this;
    util.request(api.IndexUrl).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          newGoods: res.data.new_goods,
          hotGoods: res.data.hot_goods,
          topics: res.data.topic_list,
          brand: res.data.brand_list,
          floorGoods: res.data.category_list,
          banner: res.data.banners,
          channel: res.data.channels
        });
      }
    });
  },
  onLoad: function (options) {
    
    if (wx.getStorageSync('token') === ""){
      util.request(api.Random);
     
    }

    this.getIndexData();
    util.request(api.GoodsCount).then(res => {
    
      this.setData({
        goodsCount: res.data.goods_count
      });
    });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
})
