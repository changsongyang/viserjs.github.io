import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [[0,0,10],[0,1,5],[0,2,17],[0,3,0],[0,4,3],[0,5,0],[0,6,0],[0,7,0],[0,8,5],[0,9,8],[0,10,12],[0,11,14],[0,12,3],[0,13,11],[0,14,36],[0,15,40],[0,16,30],[0,17,34],[0,18,23],[0,19,10],[0,20,10],[0,21,12],[0,22,9],[0,23,7],[1,0,15],[1,1,2],[1,2,0],[1,3,0],[1,4,1],[1,5,6],[1,6,0],[1,7,2],[1,8,4],[1,9,9],[1,10,55],[1,11,113],[1,12,55],[1,13,30],[1,14,90],[1,15,107],[1,16,134],[1,17,103],[1,18,63],[1,19,60],[1,20,43],[1,21,28],[1,22,27],[1,23,9],[2,0,17],[2,1,6],[2,2,0],[2,3,1],[2,4,3],[2,5,1],[2,6,0],[2,7,0],[2,8,1],[2,9,9],[2,10,29],[2,11,77],[2,12,53],[2,13,35],[2,14,102],[2,15,105],[2,16,115],[2,17,115],[2,18,81],[2,19,46],[2,20,56],[2,21,32],[2,22,27],[2,23,25],[3,0,13],[3,1,10],[3,2,1],[3,3,0],[3,4,2],[3,5,6],[3,6,0],[3,7,0],[3,8,1],[3,9,15],[3,10,45],[3,11,105],[3,12,54],[3,13,35],[3,14,98],[3,15,113],[3,16,125],[3,17,145],[3,18,84],[3,19,74],[3,20,78],[3,21,50],[3,22,43],[3,23,21],[4,0,9],[4,1,2],[4,2,3],[4,3,0],[4,4,7],[4,5,1],[4,6,2],[4,7,1],[4,8,8],[4,9,23],[4,10,48],[4,11,97],[4,12,65],[4,13,36],[4,14,75],[4,15,129],[4,16,98],[4,17,116],[4,18,70],[4,19,47],[4,20,48],[4,21,57],[4,22,31],[4,23,26],[5,0,12],[5,1,9],[5,2,0],[5,3,14],[5,4,0],[5,5,0],[5,6,1],[5,7,0],[5,8,1],[5,9,21],[5,10,50],[5,11,82],[5,12,45],[5,13,41],[5,14,101],[5,15,135],[5,16,102],[5,17,99],[5,18,64],[5,19,19],[5,20,24],[5,21,27],[5,22,38],[5,23,27],[6,0,17],[6,1,10],[6,2,14],[6,3,0],[6,4,1],[6,5,1],[6,6,0],[6,7,1],[6,8,4],[6,9,7],[6,10,11],[6,11,10],[6,12,2],[6,13,13],[6,14,28],[6,15,47],[6,16,39],[6,17,36],[6,18,25],[6,19,7],[6,20,14],[6,21,12],[6,22,1],[6,23,3]];

const source = [];
for(let i = 0; i < 7; i++) {
  for(let j = 0; j < 24; j++) {
    const item = {} as any;
    item.weekday = i;
    item.hour = data[i*24 +j][1];
    item.commits = data[i*24 +j][2];
    source.push(item);
  }
}

const scale = [{
  dataKey: 'weekday',
  type: 'cat',
  values: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}, {
  dataKey: 'hour',
  type: 'cat',
  values: ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p']
}];

const axis1Opts = {
  dataKey: 'weekday',
  line: null,
  tickLine: null,
  grid: null,
  label: {
    textStyle: {
      fontSize: 14,
      fill: '#555'
    }
  }
};

const axis2Opts = {
  dataKey: 'hour',
  line: {
    stroke: '#eee',
    lineWidth: 1
  },
  tickLine: {
    length: -10
  }
};

const pointOpts = {
  position: 'hour*weekday',
  size: ['commits', [2, (window.innerWidth - 120) / 48]],
  color: '#bfbfbf',
  shape: 'circle',
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[20, 60, 40, 100]" [data]="data" [scale]="scale">
      <v-tooltip></v-tooltip>
      <v-axis [dataKey]="axis1Opts.dataKey" [line]="axis1Opts.line" [tickLine]="axis1Opts.tickLine" [grid]="axis1Opts.grid" [label]="axis1Opts.label"></v-axis>
      <v-axis [dataKey]="axis2Opts.dataKey" [line]="axis2Opts.line" [tickLine]="axis2Opts.tickLine"></v-axis>
      <v-point [position]="pointOpts.position" [size]="pointOpts.size" [color]="pointOpts.color" [shape]="pointOpts.shape"></v-point>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 600;
  data = source;
  scale = scale;
  axis1Opts = axis1Opts;
  axis2Opts = axis2Opts;
  pointOpts = pointOpts;
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

