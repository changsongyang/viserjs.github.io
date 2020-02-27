import { Chart, Tooltip, Axis, Interval, Legend, Coord } from 'viser-react';
import * as React from 'react';

const data = [{
  city: '石家庄',
  type: '水果',
  value: 14500
}, {
  city: '石家庄',
  type: '米面',
  value: 8500
}, {
  city: '石家庄',
  type: '特产零食',
  value: 10000
}, {
  city: '石家庄',
  type: '茶叶',
  value: 7000
}, {
  city: '深圳',
  type: '水果',
  value: 9000
}, {
  city: '深圳',
  type: '米面',
  value: 8500
}, {
  city: '深圳',
  type: '特产零食',
  value: 11000
}, {
  city: '深圳',
  type: '茶叶',
  value: 6000
}, {
  city: '温州',
  type: '水果',
  value: 16000
}, {
  city: '温州',
  type: '米面',
  value: 5000
}, {
  city: '温州',
  type: '特产零食',
  value: 6000
}, {
  city: '温州',
  type: '茶叶',
  value: 10000
}, {
  city: '宁波',
  type: '水果',
  value: 14000
}, {
  city: '宁波',
  type: '米面',
  value: 9000
}, {
  city: '宁波',
  type: '特产零食',
  value: 10000
}, {
  city: '宁波',
  type: '茶叶',
  value: 9000
}, {
  city: '无锡',
  type: '水果',
  value: 14000
}, {
  city: '无锡',
  type: '米面',
  value: 9000
}, {
  city: '无锡',
  type: '特产零食',
  value: 10000
}, {
  city: '无锡',
  type: '茶叶',
  value: 6000
}, {
  city: '杭州',
  type: '水果',
  value: 9000
}, {
  city: '杭州',
  type: '米面',
  value: 8500
}, {
  city: '杭州',
  type: '特产零食',
  value: 10000
}, {
  city: '杭州',
  type: '茶叶',
  value: 6000
}, {
  city: '北京',
  type: '水果',
  value: 17000
}, {
  city: '北京',
  type: '米面',
  value: 6000
}, {
  city: '北京',
  type: '特产零食',
  value: 7000
}, {
  city: '北京',
  type: '茶叶',
  value: 10000
}, {
  city: '上海',
  type: '水果',
  value: 18000
}, {
  city: '上海',
  type: '米面',
  value: 11000
}, {
  city: '上海',
  type: '特产零食',
  value: 15000
}, {
  city: '上海',
  type: '茶叶',
  value: 14000
}];

const scale = [{
  dataKey: 'value',
  max: 20000,
  min: 0.0,
  nice: false,
  alias: '销售额（万）'
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const title = {
  offset: 30,
  textStyle: {
    fontSize: 14,
    fontWeight: 300
  }
}

const adjust = [{
  type: 'dodge',
  marginRatio: 0.3
}]

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data} padding={[0, 90, 20, 52]} scale={scale}>
        <Tooltip/>
        <Axis dataKey="city" label={label} tickLine={tickLine}/>
        <Axis dataKey="value" label={label} title={title}/>
        <Legend position='right-bottom'/>
        <Coord direction='LB' type='rect'/>
        <Interval position="city*value" opacity={1} adjust={adjust} color='type'/>
      </Chart>
    );
  }
}

