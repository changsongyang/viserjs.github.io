import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const data = [{"SepalLength":5.1,"SepalWidth":3.5,"PetalLength":1.4,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.9,"SepalWidth":3,"PetalLength":1.4,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.7,"SepalWidth":3.2,"PetalLength":1.3,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.6,"SepalWidth":3.1,"PetalLength":1.5,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5,"SepalWidth":3.6,"PetalLength":1.4,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5.4,"SepalWidth":3.9,"PetalLength":1.7,"PetalWidth":0.4,"Species":"I. setosa"},{"SepalLength":4.6,"SepalWidth":3.4,"PetalLength":1.4,"PetalWidth":0.3,"Species":"I. setosa"},{"SepalLength":5,"SepalWidth":3.4,"PetalLength":1.5,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.4,"SepalWidth":2.9,"PetalLength":1.4,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.9,"SepalWidth":3.1,"PetalLength":1.5,"PetalWidth":0.1,"Species":"I. setosa"},{"SepalLength":5.4,"SepalWidth":3.7,"PetalLength":1.5,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.8,"SepalWidth":3.4,"PetalLength":1.6,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.8,"SepalWidth":3,"PetalLength":1.4,"PetalWidth":0.1,"Species":"I. setosa"},{"SepalLength":4.3,"SepalWidth":3,"PetalLength":1.1,"PetalWidth":0.1,"Species":"I. setosa"},{"SepalLength":5.8,"SepalWidth":4,"PetalLength":1.2,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5.7,"SepalWidth":4.4,"PetalLength":1.5,"PetalWidth":0.4,"Species":"I. setosa"},{"SepalLength":5.4,"SepalWidth":3.9,"PetalLength":1.3,"PetalWidth":0.4,"Species":"I. setosa"},{"SepalLength":5.1,"SepalWidth":3.5,"PetalLength":1.4,"PetalWidth":0.3,"Species":"I. setosa"},{"SepalLength":5.7,"SepalWidth":3.8,"PetalLength":1.7,"PetalWidth":0.3,"Species":"I. setosa"},{"SepalLength":5.1,"SepalWidth":3.8,"PetalLength":1.5,"PetalWidth":0.3,"Species":"I. setosa"},{"SepalLength":5.4,"SepalWidth":3.4,"PetalLength":1.7,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5.1,"SepalWidth":3.7,"PetalLength":1.5,"PetalWidth":0.4,"Species":"I. setosa"},{"SepalLength":4.6,"SepalWidth":3.6,"PetalLength":1,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5.1,"SepalWidth":3.3,"PetalLength":1.7,"PetalWidth":0.5,"Species":"I. setosa"},{"SepalLength":4.8,"SepalWidth":3.4,"PetalLength":1.9,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5,"SepalWidth":3,"PetalLength":1.6,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5,"SepalWidth":3.4,"PetalLength":1.6,"PetalWidth":0.4,"Species":"I. setosa"},{"SepalLength":5.2,"SepalWidth":3.5,"PetalLength":1.5,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5.2,"SepalWidth":3.4,"PetalLength":1.4,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.7,"SepalWidth":3.2,"PetalLength":1.6,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.8,"SepalWidth":3.1,"PetalLength":1.6,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5.4,"SepalWidth":3.4,"PetalLength":1.5,"PetalWidth":0.4,"Species":"I. setosa"},{"SepalLength":5.2,"SepalWidth":4.1,"PetalLength":1.5,"PetalWidth":0.1,"Species":"I. setosa"},{"SepalLength":5.5,"SepalWidth":4.2,"PetalLength":1.4,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.9,"SepalWidth":3.1,"PetalLength":1.5,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5,"SepalWidth":3.2,"PetalLength":1.2,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5.5,"SepalWidth":3.5,"PetalLength":1.3,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.9,"SepalWidth":3.6,"PetalLength":1.4,"PetalWidth":0.1,"Species":"I. setosa"},{"SepalLength":4.4,"SepalWidth":3,"PetalLength":1.3,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5.1,"SepalWidth":3.4,"PetalLength":1.5,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5,"SepalWidth":3.5,"PetalLength":1.3,"PetalWidth":0.3,"Species":"I. setosa"},{"SepalLength":4.5,"SepalWidth":2.3,"PetalLength":1.3,"PetalWidth":0.3,"Species":"I. setosa"},{"SepalLength":4.4,"SepalWidth":3.2,"PetalLength":1.3,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5,"SepalWidth":3.5,"PetalLength":1.6,"PetalWidth":0.6,"Species":"I. setosa"},{"SepalLength":5.1,"SepalWidth":3.8,"PetalLength":1.9,"PetalWidth":0.4,"Species":"I. setosa"},{"SepalLength":4.8,"SepalWidth":3,"PetalLength":1.4,"PetalWidth":0.3,"Species":"I. setosa"},{"SepalLength":5.1,"SepalWidth":3.8,"PetalLength":1.6,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":4.6,"SepalWidth":3.2,"PetalLength":1.4,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5.3,"SepalWidth":3.7,"PetalLength":1.5,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":5,"SepalWidth":3.3,"PetalLength":1.4,"PetalWidth":0.2,"Species":"I. setosa"},{"SepalLength":7,"SepalWidth":3.2,"PetalLength":4.7,"PetalWidth":1.4,"Species":"I. versicolor"},{"SepalLength":6.4,"SepalWidth":3.2,"PetalLength":4.5,"PetalWidth":1.5,"Species":"I. versicolor"},{"SepalLength":6.9,"SepalWidth":3.1,"PetalLength":4.9,"PetalWidth":1.5,"Species":"I. versicolor"},{"SepalLength":5.5,"SepalWidth":2.3,"PetalLength":4,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":6.5,"SepalWidth":2.8,"PetalLength":4.6,"PetalWidth":1.5,"Species":"I. versicolor"},{"SepalLength":5.7,"SepalWidth":2.8,"PetalLength":4.5,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":6.3,"SepalWidth":3.3,"PetalLength":4.7,"PetalWidth":1.6,"Species":"I. versicolor"},{"SepalLength":4.9,"SepalWidth":2.4,"PetalLength":3.3,"PetalWidth":1,"Species":"I. versicolor"},{"SepalLength":6.6,"SepalWidth":2.9,"PetalLength":4.6,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":5.2,"SepalWidth":2.7,"PetalLength":3.9,"PetalWidth":1.4,"Species":"I. versicolor"},{"SepalLength":5,"SepalWidth":2,"PetalLength":3.5,"PetalWidth":1,"Species":"I. versicolor"},{"SepalLength":5.9,"SepalWidth":3,"PetalLength":4.2,"PetalWidth":1.5,"Species":"I. versicolor"},{"SepalLength":6,"SepalWidth":2.2,"PetalLength":4,"PetalWidth":1,"Species":"I. versicolor"},{"SepalLength":6.1,"SepalWidth":2.9,"PetalLength":4.7,"PetalWidth":1.4,"Species":"I. versicolor"},{"SepalLength":5.6,"SepalWidth":2.9,"PetalLength":3.6,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":6.7,"SepalWidth":3.1,"PetalLength":4.4,"PetalWidth":1.4,"Species":"I. versicolor"},{"SepalLength":5.6,"SepalWidth":3,"PetalLength":4.5,"PetalWidth":1.5,"Species":"I. versicolor"},{"SepalLength":5.8,"SepalWidth":2.7,"PetalLength":4.1,"PetalWidth":1,"Species":"I. versicolor"},{"SepalLength":6.2,"SepalWidth":2.2,"PetalLength":4.5,"PetalWidth":1.5,"Species":"I. versicolor"},{"SepalLength":5.6,"SepalWidth":2.5,"PetalLength":3.9,"PetalWidth":1.1,"Species":"I. versicolor"},{"SepalLength":5.9,"SepalWidth":3.2,"PetalLength":4.8,"PetalWidth":1.8,"Species":"I. versicolor"},{"SepalLength":6.1,"SepalWidth":2.8,"PetalLength":4,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":6.3,"SepalWidth":2.5,"PetalLength":4.9,"PetalWidth":1.5,"Species":"I. versicolor"},{"SepalLength":6.1,"SepalWidth":2.8,"PetalLength":4.7,"PetalWidth":1.2,"Species":"I. versicolor"},{"SepalLength":6.4,"SepalWidth":2.9,"PetalLength":4.3,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":6.6,"SepalWidth":3,"PetalLength":4.4,"PetalWidth":1.4,"Species":"I. versicolor"},{"SepalLength":6.8,"SepalWidth":2.8,"PetalLength":4.8,"PetalWidth":1.4,"Species":"I. versicolor"},{"SepalLength":6.7,"SepalWidth":3,"PetalLength":5,"PetalWidth":1.7,"Species":"I. versicolor"},{"SepalLength":6,"SepalWidth":2.9,"PetalLength":4.5,"PetalWidth":1.5,"Species":"I. versicolor"},{"SepalLength":5.7,"SepalWidth":2.6,"PetalLength":3.5,"PetalWidth":1,"Species":"I. versicolor"},{"SepalLength":5.5,"SepalWidth":2.4,"PetalLength":3.8,"PetalWidth":1.1,"Species":"I. versicolor"},{"SepalLength":5.5,"SepalWidth":2.4,"PetalLength":3.7,"PetalWidth":1,"Species":"I. versicolor"},{"SepalLength":5.8,"SepalWidth":2.7,"PetalLength":3.9,"PetalWidth":1.2,"Species":"I. versicolor"},{"SepalLength":6,"SepalWidth":2.7,"PetalLength":5.1,"PetalWidth":1.6,"Species":"I. versicolor"},{"SepalLength":5.4,"SepalWidth":3,"PetalLength":4.5,"PetalWidth":1.5,"Species":"I. versicolor"},{"SepalLength":6,"SepalWidth":3.4,"PetalLength":4.5,"PetalWidth":1.6,"Species":"I. versicolor"},{"SepalLength":6.7,"SepalWidth":3.1,"PetalLength":4.7,"PetalWidth":1.5,"Species":"I. versicolor"},{"SepalLength":6.3,"SepalWidth":2.3,"PetalLength":4.4,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":5.6,"SepalWidth":3,"PetalLength":4.1,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":5.5,"SepalWidth":2.5,"PetalLength":4,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":5.5,"SepalWidth":2.6,"PetalLength":4.4,"PetalWidth":1.2,"Species":"I. versicolor"},{"SepalLength":6.1,"SepalWidth":3,"PetalLength":4.6,"PetalWidth":1.4,"Species":"I. versicolor"},{"SepalLength":5.8,"SepalWidth":2.6,"PetalLength":4,"PetalWidth":1.2,"Species":"I. versicolor"},{"SepalLength":5,"SepalWidth":2.3,"PetalLength":3.3,"PetalWidth":1,"Species":"I. versicolor"},{"SepalLength":5.6,"SepalWidth":2.7,"PetalLength":4.2,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":5.7,"SepalWidth":3,"PetalLength":4.2,"PetalWidth":1.2,"Species":"I. versicolor"},{"SepalLength":5.7,"SepalWidth":2.9,"PetalLength":4.2,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":6.2,"SepalWidth":2.9,"PetalLength":4.3,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":5.1,"SepalWidth":2.5,"PetalLength":3,"PetalWidth":1.1,"Species":"I. versicolor"},{"SepalLength":5.7,"SepalWidth":2.8,"PetalLength":4.1,"PetalWidth":1.3,"Species":"I. versicolor"},{"SepalLength":6.3,"SepalWidth":3.3,"PetalLength":6,"PetalWidth":2.5,"Species":"I. virginica"},{"SepalLength":5.8,"SepalWidth":2.7,"PetalLength":5.1,"PetalWidth":1.9,"Species":"I. virginica"},{"SepalLength":7.1,"SepalWidth":3,"PetalLength":5.9,"PetalWidth":2.1,"Species":"I. virginica"},{"SepalLength":6.3,"SepalWidth":2.9,"PetalLength":5.6,"PetalWidth":1.8,"Species":"I. virginica"},{"SepalLength":6.5,"SepalWidth":3,"PetalLength":5.8,"PetalWidth":2.2,"Species":"I. virginica"},{"SepalLength":7.6,"SepalWidth":3,"PetalLength":6.6,"PetalWidth":2.1,"Species":"I. virginica"},{"SepalLength":4.9,"SepalWidth":2.5,"PetalLength":4.5,"PetalWidth":1.7,"Species":"I. virginica"},{"SepalLength":7.3,"SepalWidth":2.9,"PetalLength":6.3,"PetalWidth":1.8,"Species":"I. virginica"},{"SepalLength":6.7,"SepalWidth":2.5,"PetalLength":5.8,"PetalWidth":1.8,"Species":"I. virginica"},{"SepalLength":7.2,"SepalWidth":3.6,"PetalLength":6.1,"PetalWidth":2.5,"Species":"I. virginica"},{"SepalLength":6.5,"SepalWidth":3.2,"PetalLength":5.1,"PetalWidth":2,"Species":"I. virginica"},{"SepalLength":6.4,"SepalWidth":2.7,"PetalLength":5.3,"PetalWidth":1.9,"Species":"I. virginica"},{"SepalLength":6.8,"SepalWidth":3,"PetalLength":5.5,"PetalWidth":2.1,"Species":"I. virginica"},{"SepalLength":5.7,"SepalWidth":2.5,"PetalLength":5,"PetalWidth":2,"Species":"I. virginica"},{"SepalLength":5.8,"SepalWidth":2.8,"PetalLength":5.1,"PetalWidth":2.4,"Species":"I. virginica"},{"SepalLength":6.4,"SepalWidth":3.2,"PetalLength":5.3,"PetalWidth":2.3,"Species":"I. virginica"},{"SepalLength":6.5,"SepalWidth":3,"PetalLength":5.5,"PetalWidth":1.8,"Species":"I. virginica"},{"SepalLength":7.7,"SepalWidth":3.8,"PetalLength":6.7,"PetalWidth":2.2,"Species":"I. virginica"},{"SepalLength":7.7,"SepalWidth":2.6,"PetalLength":6.9,"PetalWidth":2.3,"Species":"I. virginica"},{"SepalLength":6,"SepalWidth":2.2,"PetalLength":5,"PetalWidth":1.5,"Species":"I. virginica"},{"SepalLength":6.9,"SepalWidth":3.2,"PetalLength":5.7,"PetalWidth":2.3,"Species":"I. virginica"},{"SepalLength":5.6,"SepalWidth":2.8,"PetalLength":4.9,"PetalWidth":2,"Species":"I. virginica"},{"SepalLength":7.7,"SepalWidth":2.8,"PetalLength":6.7,"PetalWidth":2,"Species":"I. virginica"},{"SepalLength":6.3,"SepalWidth":2.7,"PetalLength":4.9,"PetalWidth":1.8,"Species":"I. virginica"},{"SepalLength":6.7,"SepalWidth":3.3,"PetalLength":5.7,"PetalWidth":2.1,"Species":"I. virginica"},{"SepalLength":7.2,"SepalWidth":3.2,"PetalLength":6,"PetalWidth":1.8,"Species":"I. virginica"},{"SepalLength":6.2,"SepalWidth":2.8,"PetalLength":4.8,"PetalWidth":1.8,"Species":"I. virginica"},{"SepalLength":6.1,"SepalWidth":3,"PetalLength":4.9,"PetalWidth":1.8,"Species":"I. virginica"},{"SepalLength":6.4,"SepalWidth":2.8,"PetalLength":5.6,"PetalWidth":2.1,"Species":"I. virginica"},{"SepalLength":7.2,"SepalWidth":3,"PetalLength":5.8,"PetalWidth":1.6,"Species":"I. virginica"},{"SepalLength":7.4,"SepalWidth":2.8,"PetalLength":6.1,"PetalWidth":1.9,"Species":"I. virginica"},{"SepalLength":7.9,"SepalWidth":3.8,"PetalLength":6.4,"PetalWidth":2,"Species":"I. virginica"},{"SepalLength":6.4,"SepalWidth":2.8,"PetalLength":5.6,"PetalWidth":2.2,"Species":"I. virginica"},{"SepalLength":6.3,"SepalWidth":2.8,"PetalLength":5.1,"PetalWidth":1.5,"Species":"I. virginica"},{"SepalLength":6.1,"SepalWidth":2.6,"PetalLength":5.6,"PetalWidth":1.4,"Species":"I. virginica"},{"SepalLength":7.7,"SepalWidth":3,"PetalLength":6.1,"PetalWidth":2.3,"Species":"I. virginica"},{"SepalLength":6.3,"SepalWidth":3.4,"PetalLength":5.6,"PetalWidth":2.4,"Species":"I. virginica"},{"SepalLength":6.4,"SepalWidth":3.1,"PetalLength":5.5,"PetalWidth":1.8,"Species":"I. virginica"},{"SepalLength":6,"SepalWidth":3,"PetalLength":4.8,"PetalWidth":1.8,"Species":"I. virginica"},{"SepalLength":6.9,"SepalWidth":3.1,"PetalLength":5.4,"PetalWidth":2.1,"Species":"I. virginica"},{"SepalLength":6.7,"SepalWidth":3.1,"PetalLength":5.6,"PetalWidth":2.4,"Species":"I. virginica"},{"SepalLength":6.9,"SepalWidth":3.1,"PetalLength":5.1,"PetalWidth":2.3,"Species":"I. virginica"},{"SepalLength":5.8,"SepalWidth":2.7,"PetalLength":5.1,"PetalWidth":1.9,"Species":"I. virginica"},{"SepalLength":6.8,"SepalWidth":3.2,"PetalLength":5.9,"PetalWidth":2.3,"Species":"I. virginica"},{"SepalLength":6.7,"SepalWidth":3.3,"PetalLength":5.7,"PetalWidth":2.5,"Species":"I. virginica"},{"SepalLength":6.7,"SepalWidth":3,"PetalLength":5.2,"PetalWidth":2.3,"Species":"I. virginica"},{"SepalLength":6.3,"SepalWidth":2.5,"PetalLength":5,"PetalWidth":1.9,"Species":"I. virginica"},{"SepalLength":6.5,"SepalWidth":3,"PetalLength":5.2,"PetalWidth":2,"Species":"I. virginica"},{"SepalLength":6.2,"SepalWidth":3.4,"PetalLength":5.4,"PetalWidth":2.3,"Species":"I. virginica"},{"SepalLength":5.9,"SepalWidth":3,"PetalLength":5.1,"PetalWidth":1.8,"Species":"I. virginica"}];

const dataPre = {
  transform: [{
    type: 'fold',
    fields: ['SepalLength','SepalWidth','PetalLength','PetalWidth'],
    key: 'type',
    value: 'value'
  }, {
    type: 'bin.quantile',
    field: 'value',
    as: '_bin',
    groupBy: ['Species', 'type'],
  }]
};

const scale = [{
  dataKey: 'range',
  min: 0,
  max: 240000,
}, {
  dataKey: 'outliers',
  min: 0,
  max: 240000,
}];

const colorMap = {
  'I. setosa': 'red',
  'I. versicolor': 'blue',
  'I. virginica': 'green',
};

const tooltipOpts = {
  crosshairs: {
    type: 'rect',
  },
};

const seriesColor = ['Species', val => {
  return colorMap[val];
}];

const seriesStyle = ['Species', {
  stroke: '#545454',
  fill: val => {
    return colorMap[val];
  },
  fillOpacity: 0.3,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [scale]="scale">
      <v-tooltip [crosshairs]="tooltipOpts.crosshairs"></v-tooltip>
      <v-axis></v-axis>
      <v-legend marker="circle"></v-legend>
      <v-box position="type*_bin" adjust="dodge" [style]="seriesStyle" [color]="seriesColor"></v-box>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  dataPre = dataPre;
  scale = scale;
  colorMap = colorMap;
  tooltipOpts = tooltipOpts;
  seriesColor = seriesColor;
  seriesStyle = seriesStyle;
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
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
