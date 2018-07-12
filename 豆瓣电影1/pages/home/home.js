// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [  
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    arr:[
      {
        url: '/pages/images/movie1.jpg',
        name: '侏罗纪世界2',
        director: '胡安·安东尼奥·巴亚纳',
        sketch: '影片主要讲述努布拉岛上的休眠火山开始活跃，欧文与克莱尔保           护岛上幸存的恐龙免于灭绝的故事。'
      },
      {
        url: '/pages/images/movie2.jpg',
        name: '我不是药神',
        director: '文牧野导演,宁浩，徐峥监制',
        sketch: '影片讲述了神油店老板程勇从一个交不起房租的男性保健品商贩          程勇，一跃成为印度仿制药“格列宁”独家代理商的故事。'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getMovie();
  },
  getMovie:function(){

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