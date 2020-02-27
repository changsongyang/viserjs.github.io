import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [{
  type: '1-3秒',
  value: 0.16
}, {
  type: '4-10秒',
  value: 0.125
}, {
  type: '11-30秒',
  value: 0.24
}, {
  type: '31-60秒',
  value: 0.19
}, {
  type: '1-3分',
  value: 0.22
}, {
  type: '3-10分',
  value: 0.05
}, {
  type: '10-30分',
  value: 0.01
}, {
  type: '30+分',
  value: 0.015
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(val) {
    return String(val * 100) + '%';
  }
}

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const color = ['type', function(val) {
  if (val === '10-30分' || val === '30+分') {
    return '#ff4d4f';
  }
  return '#2194ff';
}]

const labelInterval = ['value', {
  formatter: function formatter(text) {
    var val = parseFloat(text);
    if (val < 0.05) {
      return (val * 100).toFixed(1) + '%';
    }
  },
  offset: 10
}]

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="true" [height]="400" [data]="data" [padding]="[20, 20, 50, 40]">
      <v-tooltip></v-tooltip>
      <v-axis  dataKey="type" [label]="label" [tickLine]="tickLine"></v-axis>
      <v-axis dataKey="value" [label]="labelFormat"></v-axis>
      <v-interval position="type*value" [opacity]="1" [label]="labelInterval" [color]="color"></v-interval>
    </v-chart>
  </div>
  `
})
class AppComponent {
  data = data;
  labelFormat = labelFormat;
  label = label;
  tickLine = tickLine;
  color = color;
  labelInterval = labelInterval;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export default class AppModule { }

