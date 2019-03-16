//index.js
//获取应用实例
const app = getApp()
// const roles = require('../../utils/roles')

const device = wx.getSystemInfoSync();
const width = device.windowWidth / 2;
const height = width;

Page({
  data: {
    // ssrListShow: true,
    // ssrList: [],
    // srListShow: false,
    // srList: [],
    canvasWidth: width,
    canvasHeight: height,
    word1Show: false,
  },
  onShow: function(){
    const _this = this;
    const width = parseInt(this.data.canvasWidth);
    const height = parseInt(this.data.canvasHeight);

    const e = Math.PI / 60;

    // 最大的圆盘
    // 使用 wx.createContext 获取绘图上下文 context
    const ctx1 = wx.createCanvasContext('canvas1');
    var i = 0
    var inter = setInterval(function(){
      // translate 将绘制的基准点设置到左边中间
      ctx1.translate(width, height / 2);
      // 旋转角度
      ctx1.rotate(i * e);
      // 设置绘制图片
      ctx1.drawImage('../../images/dizhi1.png', -width, -height, width * 2, height * 2);
      if(i >= 100){
        // 旋转结束，显示变色的字体
        _this.setData({
          word1Show: true
        });
        // 清除interval
        clearInterval(inter);
      }
      i++;
      // 绘制
      ctx1.draw();
    },20);

    // 第二个圆盘 ,这个我没加变色字了
    const ctx2 = wx.createCanvasContext('canvas2');
    var j = 0
    var inter2 = setInterval(function () {
      ctx2.translate(width, height / 2);
      ctx2.rotate(j * e);
      ctx2.drawImage('../../images/dizhi2.png', -width*0.8, -height*0.8, width * 1.6, height * 1.6);
      ctx2.draw();
      j++;
      if (j > 90) {
        clearInterval(inter2);
      }
    }, 25);
  },

  onLoad: function () {
    // this.setData({
    //   ssrList: roles.ssrRoles,
    //   srList: roles.srRoles
    // })
  },
  // ssrListShowFunc(){
  //   const show = this.data.ssrListShow;
  //   this.setData({
  //     ssrListShow: !show
  //   })
  // },
  // srListShowFunc() {
  //   const show = this.data.srListShow;
  //   this.setData({
  //     srListShow: !show
  //   })
  // },
  // jumpToAdd(options){
  //   wx.navigateTo({
  //     url: '/pages/add/add?id=' + options.currentTarget.dataset.id,
  //   })
  // },
  // onShareAppMessage(res){

  // }
})
