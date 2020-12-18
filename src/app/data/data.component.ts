import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts/lib/echarts';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  t2;
  baseUrl = 'http://localhost:8000/';
  option = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [],
      type: 'line'
    }]
  };
  constructor(private hc: HttpClient) { }
  openLED() {
    this.hc.put(this.baseUrl + 'SetLED', { status: 1 }).subscribe((val: any) => {
      console.log('open')
    })
  }
  closeLED() {
    this.hc.put(this.baseUrl + 'SetLED', { status: 0 }).subscribe((val: any) => {
      console.log('close')
    })
  }
  setFAN(status) {
    this.hc.put(this.baseUrl + 'SetFAN', { status: status }).subscribe((val: any) => {
      console.log('fan')
    })
  }
  ngOnInit(): void {
    clearInterval(this.t2);
    this.option = {
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [],
        type: 'line'
      }]
    };

    this.t2 = setInterval(() => {
      // this.sensor.getState().then(val1 => {
      var date = new Date();
      if (this.option.xAxis.data.length == 7) // 如果数组中存在7个数据则删除第一个
      {
        this.option.xAxis.data.splice(0, 1);
      }
      this.option.xAxis.data.push(date.toLocaleString().substring(date.toLocaleString().length - 5, date.toLocaleString().length));//设置当前时间分秒
      if (this.option.series[0].data.length == 7) // 如果数组中存在7个数据则删除第一个
      {
        this.option.series[0].data.splice(0, 1);
      }
      // this.hc.post(this.baseUrl + 'light', { val: val1 }).subscribe((val2: any) => {
      //   if (val2.succ) {
      //     console.log(true);
      //   }
      // })
      this.option.series[0].data.push(1);//在data里插入光照值
      echarts.init(<HTMLDivElement>document.getElementById('echart')).setOption(<EChartOption>this.option);//刷新option 内容
      // }).catch((err) => {
      // })
    }, 3000);
  }

}
