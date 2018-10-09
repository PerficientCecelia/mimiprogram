//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    show: ""
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  click:function(){
    var that = this; 
    var show; 
    wx.scanCode({ 
       success: (res) => { 
           this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
           that.setData({ show: this.show }) ;      
           wx.redirectTo({
             url: '../ReportForm/ReportForm?deviceId='+res.result
           })
         },
         fail:(res)=>{
           this.show="fail";
           that.setData({ show: this.show });   
         }
     })
  }



 

})
