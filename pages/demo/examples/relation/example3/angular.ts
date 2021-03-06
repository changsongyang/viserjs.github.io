import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'x',
  sync: true,
}, {
  dataKey: 'y',
  sync: true,
}];

const label = ['name', {
  labelEmit: true,
  textStyle: {
    fill: '#8c8c8c',
  },
}];

@Component({
  selector: '#mount',
  template: `
  <div >
    <v-chart [forceFit]="forceFit" [height]="height" [scale]="scale">
      <v-view  [data]="edgesData">
        <v-coord type="polar" direction="yReverse"></v-coord>
        <v-edge position="x*y" color="source" shape="arc" [opacity]="0.5" tooltip="source*target*value"></v-edge>
      </v-view>
      <v-view [data]="nodesData">
        <v-coord type="polar" direction="yReverse"></v-coord>
        <v-polygon position="x*y" color="id" [label]="label"></v-polygon>
      </v-view>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 500;
  edgesData = [];
  nodesData = [];
  scale = scale;
  label = label;

  constructor() {
    $.getJSON('/assets/data/relationship-with-weight.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'graph',
        edges: d => d.links,
      });
      dv.transform({
        type: 'diagram.arc',
        sourceWeight: e => e.sourceWeight,
        targetWeight: e => e.targetWeight,
        weight: true,
        marginRatio: 0.3,
      });
      this.edgesData = dv.edges;
      this.nodesData = dv.nodes;
    });
  }
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

