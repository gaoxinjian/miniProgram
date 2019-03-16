//index.js
//获取应用实例
const app = getApp()
const roles = require('../../utils/roles')

Page({
  data: {
    ssrListShow: true,
    ssrList: [],
    srListShow: false,
    srList: [],
    animationData1: {},
    animationData2: {},
  },
  onShow: function(){
    const animation1 = wx.createAnimation({
      duration: 3000,
      timingFunction: 'ease',
    })
    const animation2 = wx.createAnimation({
      duration: 3000,
      timingFunction: 'ease',
    })

    this.animation1 = animation1
    this.animation2 = animation2

    animation1.rotate(360).step()
    animation2.rotate(360).step()

    this.setData({
      animationData1: animation1.export(),
      animationData2: animation2.export()
    })

  },
  onLoad: function () {
    this.setData({
      ssrList: roles.ssrRoles,
      srList: roles.srRoles
    })
  },
  ssrListShowFunc(){
    const show = this.data.ssrListShow;
    this.setData({
      ssrListShow: !show
    })
  },
  srListShowFunc() {
    const show = this.data.srListShow;
    this.setData({
      srListShow: !show
    })
  },
  jumpToAdd(options){
    wx.navigateTo({
      url: '/pages/add/add?id=' + options.currentTarget.dataset.id,
    })
  },
  onShareAppMessage(res){

  }
})
