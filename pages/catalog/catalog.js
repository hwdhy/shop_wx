var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
  data: {
    navList: [],
    categoryList: [],
    currentCategory: {},
    scrollLeft: 0,
    scrollTop: 0,
    goodsCount: 0,
    scrollHeight: 0
  },
  onLoad: function (options) {
    this.getCatalog();
  },
  getCatalog: function () {
    let that = this;
    wx.showLoading({
      title: '加载中...',
    });
    util.request(api.CatalogList).then(function (res) {
        that.setData({
          navList: res.data.category_list,
          currentCategory: res.data.current_category
        });
        wx.hideLoading();
      });
    util.request(api.GoodsCount).then(function (res) {
      that.setData({
        goodsCount: res.data.goods_count
      });
    });

  },
  getCurrentCategory: function (id) {
    let that = this;
    util.request(api.CatalogCurrent, { id: id })
      .then(function (res) {
        console.log("res:",res);
        that.setData({
          currentCategory: res.data.current_category
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
  getList: function () {
    var that = this;
    util.request(api.ApiRootUrl + 'api/catalog/' + that.data.currentCategory.cat_id)
      .then(function (res) {
        that.setData({
          categoryList: res.data,
        });
      });
  },
  switchCate: function (event) {
    var that = this;
    var currentTarget = event.currentTarget;
    console.log("currentCategory:",that.data.currentCategory.id);
    if (that.data.currentCategory.id == event.currentTarget.dataset.id) {
      return false;
    }

    this.getCurrentCategory(event.currentTarget.dataset.id);
  }
})