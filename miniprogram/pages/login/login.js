// miniprogram/pages/login/login.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  formSubmit: function (e) {
    var postValue = e.detail.value;
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  
  usernameInput:function(e){
    this.setData({
      username: e.detail.value
    })

  },

  passwordInput:function(e){
    this.setData({
      password: e.detail.value
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})