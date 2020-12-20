import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts'
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  t1;
  t2;
  MINTEM$ = 0;
  MAXTEM$ = 0;
  HUM$;
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
      data: [0, 0, 0, 0, 0, 0],
      type: 'line'
    }]
  };
  option2 = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [0, 0, 0, 0, 0, 0],
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
  openAIR() {
    this.hc.put(this.baseUrl + 'SetAIR', { status: 1 }).subscribe((val: any) => {
      console.log('open')
    })
  }
  closeAIR() {
    this.hc.put(this.baseUrl + 'SetAIR', { status: 0 }).subscribe((val: any) => {
      console.log('close')
    })
  }
  openWARM() {
    this.hc.put(this.baseUrl + 'SetWARM', { status: 1 }).subscribe((val: any) => {
      console.log('open')
    })
  }
  closeWARM() {
    this.hc.put(this.baseUrl + 'SetWARM', { status: 0 }).subscribe((val: any) => {
      console.log('close')
    })
  }
  openHUM() {
    this.hc.put(this.baseUrl + 'SetADDHUM', { status: 1 }).subscribe((val: any) => {
      console.log('open')
    })
  }
  closeHUM() {
    this.hc.put(this.baseUrl + 'SetADDHUM', { status: 0 }).subscribe((val: any) => {
      console.log('close')
    })
  }
  SetFAN(status: number) {
    this.hc.put(this.baseUrl + 'SetFAN', { status: status }).subscribe((val: any) => {
      console.log('fan')
    })
  }


  SetHUM() {
    this.HUM$ = (<HTMLInputElement>document.getElementById('hum')).value;
  }
  SetAIR() {
    this.MAXTEM$ = Number.parseInt((<HTMLInputElement>document.getElementById('maxtem')).value);
    this.hc.put(this.baseUrl + 'SETMAXTEM', { value: this.MAXTEM$ }).subscribe((val: any) => {
      console.log('succ')
    })
  }
  SetWARM() {
    this.MINTEM$ = Number.parseInt((<HTMLInputElement>document.getElementById('mintem')).value);
    this.hc.put(this.baseUrl + 'SETMINTEM', { value: this.MINTEM$ }).subscribe((val: any) => {

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
    clearInterval(this.t1);
    this.option2 = {
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
    var date = new Date();
    // for (let i = 0; i < 7; i++) this.option.xAxis.data.push(date.toLocaleString().substring(date.toLocaleString().length - 8, date.toLocaleString().length));//设置当前时间分秒
    var myChart = echarts.init(<HTMLDivElement>document.getElementById('echart'));
    this.t2 = setInterval(() => {
      date = new Date();
      if (this.option.xAxis.data.length == 7) // 如果数组中存在7个数据则删除第一个
      {
        this.option.xAxis.data.splice(0, 1);
      }
      this.option.xAxis.data.push(date.toLocaleString().substring(date.toLocaleString().length - 8, date.toLocaleString().length));//设置当前时间分秒
      if (this.option.series[0].data.length == 7) // 如果数组中存在7个数据则删除第一个
      {
        this.option.series[0].data.splice(0, 1);
      }
      this.hc.get(this.baseUrl + 'TEM').subscribe((val: any) => {
        this.option.series[0].data.push(val);//在data里插入光照值
      })
      myChart.setOption(<EChartOption>this.option);
    }, 3000);

    // for (let i = 0; i < 7; i++) this.option2.xAxis.data.push(date.toLocaleString().substring(date.toLocaleString().length - 8, date.toLocaleString().length));//设置当前时间分秒
    var myChart2 = echarts.init(<HTMLDivElement>document.getElementById('echart2'));

    this.t1 = setInterval(() => {
      date = new Date();
      if (this.option2.xAxis.data.length == 7) // 如果数组中存在7个数据则删除第一个
      {
        this.option2.xAxis.data.splice(0, 1);
      }
      this.option2.xAxis.data.push(date.toLocaleString().substring(date.toLocaleString().length - 8, date.toLocaleString().length));//设置当前时间分秒
      if (this.option2.series[0].data.length == 7) // 如果数组中存在7个数据则删除第一个
      {
        this.option2.series[0].data.splice(0, 1);
      }
      this.hc.get(this.baseUrl + 'HUM').subscribe((val: any) => {
        this.option2.series[0].data.push(val);//在data里插入光照值
      })
      myChart2.setOption(<EChartOption>this.option2);
    }, 3000);

  }

}
