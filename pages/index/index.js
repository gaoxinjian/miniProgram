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
    animationData: {}
  },
  onShow: function(){
    const animation = wx.createAnimation({
      duration: 3000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.rotate(360).step()

    this.setData({
      animationData: animation.export()
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
