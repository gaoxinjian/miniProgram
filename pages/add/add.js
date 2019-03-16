// pages/add/add.js
const app = getApp()
const skills = require('../../utils/skills.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    role_id: '0001',
    role_name: '大熊',
    avatar: '../../images/avatar.jpg',
    last_points: 0,
    skills_arr: [],
    active_skill: null,
    active_skill_detail: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const skillsObj = JSON.parse(JSON.stringify(skills.skills_all[options.id]));
    this.setData({
      role_id: skillsObj.role_id,
      role_name: skillsObj.role_name,
      avatar: skillsObj.avatar,
      last_points: skillsObj.last_points,
      skills_arr: skillsObj.skill_arr
    })
  },

  selectActiveSkill(options){
    const i = options.currentTarget.dataset.skillId.split('_')[1];
    const j = options.currentTarget.dataset.skillId.split('_')[2];
    const current_skill = this.data.skills_arr[i][j];
    this.setData({
      active_skill: options.currentTarget.dataset.skillId,
      active_skill_detail: current_skill
    })
  },

  upgradeFunc(){
    const current_id = this.data.active_skill;
    if (!current_id){
      return
    }

    const skills_arr = this.data.skills_arr;
    const id_arr = current_id.split('_').map(function(e){
      return +e;
    });
    const i = id_arr[1];
    const j = id_arr[2];
    const current_skill = skills_arr[i][j];
    const level_top = current_skill.skill_type == 4 ? 10 : 20;
    const last_points = this.data.last_points;

    if (current_skill.skill_pre && current_skill.skill_pre.length > 0){
      var pre_skill_arr = current_skill.skill_pre;
      var pre_level = current_skill.pre_level;
      for (var k = 0; k < pre_skill_arr.length; k++){
        var pre_id_arr = pre_skill_arr[k].split('_').map(function(e){
          return +e;
        })
        if (skills_arr[pre_id_arr[1]][pre_id_arr[2]].current_level < pre_level){
          wx.showToast({
            title: '前置技能等级不够',
            icon: 'none',
            duration: 600
          })
          return;
        }
      }
    }

    var add_num = 1;
    if (current_skill.skill_type == 1 || current_skill.skill_type == 2 || current_skill.skill_type == 3 || current_skill.skill_type == 5){
      if (current_skill.current_level > 14){
        add_num = 10;
      } else if (current_skill.current_level > 9) {
        add_num = 5;
      } else if (current_skill.current_level > 4){
        add_num = 3;
      } else if (current_skill.current_level > 0){
        add_num = 1;
      } else {
        add_num = 5;
      }
    } else if (current_skill.skill_type == 6) {
      if (current_skill.current_level > 14) {
        add_num = 20;
      } else if (current_skill.current_level > 9) {
        add_num = 10;
      } else if (current_skill.current_level > 4) {
        add_num = 6;
      } else if (current_skill.current_level > 0) {
        add_num = 2;
      } else {
        add_num = 10;
      }
    } else {
      if (current_skill.current_level > 8) {
        add_num = 16;
      } else if (current_skill.current_level > 6) {
        add_num = 8;
      } else if (current_skill.current_level > 4) {
        add_num = 4;
      } else if (current_skill.current_level > 0){
        add_num = 2;
      } else {
        add_num = 10;
      }
    }

    if (current_skill.current_level < level_top && last_points >= add_num){
      skills_arr[i][j].current_level = parseInt(current_skill.current_level) + 1;
      this.setData({
        skills_arr: skills_arr,
        last_points: last_points - add_num
      })
    }
  },
  
  reset(){
    this.onLoad({id: this.data.role_id});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})