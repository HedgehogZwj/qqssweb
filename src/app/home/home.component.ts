import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    var map = new BMapGL.Map('container'); // 创建Map实例
    var point = new BMapGL.Point(116.404, 39.925);
    map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);//可滚动缩放大小
    var point2 = new BMapGL.Point(116.40400005, 39.925);
    // 创建点标记
    var marker = new BMapGL.Marker(point2);
    map.addOverlay(marker);
    // 创建信息窗口
    var opts = {
      width: 200,
      height: 100,
      title: 'LED'
    };
    var infoWindow = new BMapGL.InfoWindow('QQSS物联网产品LED', opts);
    // 点标记添加点击事件
    marker.addEventListener('click', function () {
      map.openInfoWindow(infoWindow, point2); // 开启信息窗口
    });
  }

}
