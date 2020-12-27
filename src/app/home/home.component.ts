import { Component, OnInit } from '@angular/core';
declare var BMapGL: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {


    var map = new BMapGL.Map('container'); // 创建Map实例
    //显示地图
    var point1 = new BMapGL.Point(116.404, 39.925);
    map.centerAndZoom(point1, 15); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);//可滚动缩放大小
    var point2 = new BMapGL.Point(116.398265, 39.931342);
    var point3 = new BMapGL.Point(106.605368, 29.733524);
    var point4 = new BMapGL.Point(121.383848, 37.539698);
    var point5 = new BMapGL.Point(120.152478, 30.173666);
    var point6 = new BMapGL.Point(121.51661, 25.042669);
    var point7 = new BMapGL.Point(114.1806, 22.316732);
    // 创建点标记
    var marker1 = new BMapGL.Marker(point1);
    var marker2 = new BMapGL.Marker(point2);
    var marker3 = new BMapGL.Marker(point3);
    var marker4 = new BMapGL.Marker(point4);
    var marker5 = new BMapGL.Marker(point5);
    var marker6 = new BMapGL.Marker(point6);
    var marker7 = new BMapGL.Marker(point7);
    map.addOverlay(marker1);
    map.addOverlay(marker2);
    map.addOverlay(marker3);
    map.addOverlay(marker4);
    map.addOverlay(marker5);
    map.addOverlay(marker6);
    map.addOverlay(marker7);
    // 创建信息窗口
    var opt = {
      width: 200,
      height: 100,
      title: 'QQSS物联网家居'
    };
    var infoWindow1 = new BMapGL.InfoWindow('产品LED', opt);
    // 点标记添加点击事件
    marker1.addEventListener('click', function () {
      map.openInfoWindow(infoWindow1, point1); // 开启信息窗口
    });
    var infoWindow2 = new BMapGL.InfoWindow('产品Stove', opt);
    // 点标记添加点击事件
    marker2.addEventListener('click', function () {
      map.openInfoWindow(infoWindow2, point2); // 开启信息窗口
    });
    var infoWindow3 = new BMapGL.InfoWindow('产品Fan', opt);
    // 点标记添加点击事件
    marker3.addEventListener('click', function () {
      map.openInfoWindow(infoWindow3, point3); // 开启信息窗口
    });
    var infoWindow4 = new BMapGL.InfoWindow('产品Air-condition', opt);
    // 点标记添加点击事件
    marker4.addEventListener('click', function () {
      map.openInfoWindow(infoWindow4, point4); // 开启信息窗口
    });
    var infoWindow5 = new BMapGL.InfoWindow('产品Humidity', opt);
    // 点标记添加点击事件
    marker5.addEventListener('click', function () {
      map.openInfoWindow(infoWindow5, point5); // 开启信息窗口
    });
    var infoWindow6 = new BMapGL.InfoWindow('设备温度传感器', opt);
    // 点标记添加点击事件
    marker6.addEventListener('click', function () {
      map.openInfoWindow(infoWindow6, point6); // 开启信息窗口
    });
    var infoWindow7 = new BMapGL.InfoWindow('设备湿度传感器', opt);
    // 点标记添加点击事件
    marker7.addEventListener('click', function () {
      map.openInfoWindow(infoWindow7, point7); // 开启信息窗口
    });


    //
    var ac = new BMapGL.Autocomplete(    //建立一个自动完成的对象
      {
        "input": "suggestId",
        "location": map
      });

    ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
      var str = "";
      var _value = e.fromitem.value;
      var value = "";
      if (e.fromitem.index > -1) {
        value = _value.province + _value.city + _value.district + _value.street + _value.business;
      }
      str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

      value = "";
      if (e.toitem.index > -1) {
        _value = e.toitem.value;
        value = _value.province + _value.city + _value.district + _value.street + _value.business;
      }
      str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
      (<HTMLInputElement>document.getElementById("searchResultPanel")).value = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
      var _value = e.item.value;
      myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
      (<HTMLInputElement>document.getElementById("searchResultPanel")).value = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
      this.setPlace(map, myValue);
    });


  }
  setPlace(map, myValue) {
    map.clearOverlays();    //清除地图上所有覆盖物
    function myFun() {
      var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
      map.centerAndZoom(pp, 18);
      map.addOverlay(new BMapGL.Marker(pp));    //添加标注
    }
    var local = new BMapGL.LocalSearch(map, { //智能搜索
      onSearchComplete: myFun
    });
    local.search(myValue);
  }

}
