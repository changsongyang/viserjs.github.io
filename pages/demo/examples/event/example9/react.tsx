import { Chart, Tooltip, Legend, Axis, Plugin, Slider, FacetView, Facet, Line } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'time',
  type: 'time',
  tickCount: 10,
  mask: 'M/DD H:mm'
}];

const facetOpts = {
  views: (view, facet) => {
    const { colValue, data } = facet;
    let color;
    let alias;
    if (colValue === 'rain') {
      color = '#1890ff';
      alias = '降雨量(mm)';

    } else if (colValue === 'flow') {
      color = '#2FC25B';
      alias = '流量(m^3/s)';
    }

    return {
      data,
      scale: [{
        dataKey: colValue,
        alias,
      }],
      series: [{
        quickType: 'line',
        position: `time*${colValue}`,
        color,
      }]
    };
  }
};

export default class App extends React.Component {

  state = {
    sourceData: [],
    start: '2009/7/20 0:00',
    end: '2009/7/25 0:00',
  }

  componentDidMount() {
    $.getJSON('/assets/data/rain-flow.json', (sourceData) => {
      this.setState({sourceData});
    })
  }

  slideChange = (opts: any) => {
    this.setState({
      start: opts.startValue, end: opts.endValue,
    });
  }

  getDv() {
    const { start, end, sourceData } = this.state;
    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();
    const ds = new DataSet({
      state: {
        start,
        end,
      }
    });
    const originDv = ds.createView();
    originDv.source(sourceData)
      .transform({
        type: 'fold',
        fields: [ 'rain', 'flow' ],
        key: 'type',
        value: 'value',
        retains: [ 'rain', 'flow', 'time' ]
      });


    const chartDv = ds.createView();
    chartDv.source(originDv)
      .transform({
        type: 'fold',
        fields: [ 'rain', 'flow' ],
        key: 'type',
        value: 'value',
        retains: [ 'rain', 'flow', 'time' ]
      })
      .transform({
        type: 'filter',
        callback(obj) {
          const time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
          return time >= startTime && time <= endTime;
        }
      });
    return { originDv, chartDv };
  }

  render() {
    const {start, end, sourceData} = this.state;
    if (!sourceData.length) {
      return (<div></div>);
    }

    const {originDv, chartDv} = this.getDv();
    const sliderOpts = {
      container: 'viser-slider-1',
      width: 'auto',
      height: 26,
      start, // 和状态量对应
      end,
      xAxis: 'time',
      yAxis: 'value',
      scales: {
        time: {
          type: 'time',
          tickCount: 10,
          mask: 'M/DD H:mm'
        }
      },
      data: originDv,
      backgroundChart: {
        type: 'line'
      },
      onChange: this.slideChange.bind(this)
    };
    return (
      <div>
        <Chart forceFit height={400} animate={false} padding={[ 20, 20, 0, 80]} data={chartDv} scale={scale}>
          <Axis />
          <Facet type="mirror" fields={['type']} showTitle={false} padding={[ 0, 0, 40, 0]} {...facetOpts} ></Facet>
        </Chart>
        <Plugin>
          <Slider {...sliderOpts}/>
        </Plugin>
      </div>
    );
  }
}
