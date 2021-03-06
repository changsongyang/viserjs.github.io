import { Chart, Tooltip, Axis, Line, Legend, Point } from 'viser-react';
import * as React from 'react';

const data = [{
  country: 'France',
  year: '2000',
  value: 32.2,
  marker: 'true'
}, {
  country: 'France',
  year: '2005',
  value: 30.9,
  marker: 'false'
}, {
  country: 'France',
  year: '2010',
  value: 29.7,
  marker: 'false'
}, {
  country: 'France',
  year: '2015',
  value: 28.6,
  marker: 'false'
}, {
  country: 'France',
  year: '2020',
  value: 27.7,
  marker: 'false'
}, {
  country: 'France',
  year: '2025',
  value: 26.9,
  marker: 'true'
}, {
  country: 'Germany',
  year: '2000',
  value: 32.8,
  marker: 'true'
}, {
  country: 'Germany',
  year: '2005',
  value: 30.6,
  marker: 'false'
}, {
  country: 'Germany',
  year: '2010',
  value: 28.7,
  marker: 'false'
}, {
  country: 'Germany',
  year: '2015',
  value: 27.0,
  marker: 'false'
}, {
  country: 'Germany',
  year: '2020',
  value: 25.3,
  marker: 'false'
}, {
  country: 'Germany',
  year: '2025',
  value: 23.7,
  marker: 'true'
}, {
  country: 'India',
  year: '2000',
  value: 19.4,
  marker: 'true'
}, {
  country: 'India',
  year: '2005',
  value: 16.1,
  marker: 'false'
}, {
  country: 'India',
  year: '2010',
  value: 13.5,
  marker: 'false'
}, {
  country: 'India',
  year: '2015',
  value: 11.5,
  marker: 'false'
}, {
  country: 'India',
  year: '2020',
  value: 9.8,
  marker: 'false'
}, {
  country: 'India',
  year: '2025',
  value: 8.5,
  marker: 'true'
}, {
  country: 'Portugal',
  year: '2000',
  value: 24.1,
  marker: 'true'
}, {
  country: 'Portugal',
  year: '2005',
  value: 22.8,
  marker: 'false'
}, {
  country: 'Portugal',
  year: '2010',
  value: 21.1,
  marker: 'false'
}, {
  country: 'Portugal',
  year: '2015',
  value: 19.8,
  marker: 'false'
}, {
  country: 'Portugal',
  year: '2020',
  value: 18.6,
  marker: 'false'
}, {
  country: 'Portugal',
  year: '2025',
  value: 17.8,
  marker: 'true'
}, {
  country: 'Russian',
  year: '2000',
  value: 41.6,
  marker: 'true'
}, {
  country: 'Russian',
  year: '2005',
  value: 40.2,
  marker: 'false'
}, {
  country: 'Russian',
  year: '2010',
  value: 38.8,
  marker: 'false'
}, {
  country: 'Russian',
  year: '2015',
  value: 37.6,
  marker: 'false'
}, {
  country: 'Russian',
  year: '2020',
  value: 36.4,
  marker: 'false'
}, {
  country: 'Russian',
  year: '2025',
  value: 35.2,
  marker: 'true'
}, {
  country: 'United Kingdom',
  year: '2000',
  value: 36.3,
  marker: 'true'
}, {
  country: 'United Kingdom',
  year: '2005',
  value: 30.5,
  marker: 'false'
}, {
  country: 'United Kingdom',
  year: '2010',
  value: 25.7,
  marker: 'false'
}, {
  country: 'United Kingdom',
  year: '2015',
  value: 21.6,
  marker: 'false'
}, {
  country: 'United Kingdom',
  year: '2020',
  value: 18.1,
  marker: 'false'
}, {
  country: 'United Kingdom',
  year: '2025',
  value: 15.2,
  marker: 'true'
}, {
  country: 'Switzerland',
  year: '2000',
  value: 29.8,
  marker: 'true'
}, {
  country: 'Switzerland',
  year: '2005',
  value: 27.6,
  marker: 'false'
}, {
  country: 'Switzerland',
  year: '2010',
  value: 25.8,
  marker: 'false'
}, {
  country: 'Switzerland',
  year: '2015',
  value: 24.2,
  marker: 'false'
}, {
  country: 'Switzerland',
  year: '2020',
  value: 22.6,
  marker: 'false'
}, {
  country: 'Switzerland',
  year: '2025',
  value: 21.0,
  marker: 'true'
}];

const scale = [{
  dataKey: 'year',
  type: 'linear',
  tickInterval: 5
}, {
  dataKey: 'value',
  type: 'linear',
  tickInterval: 5
}];

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={440} data={data} scale={scale} padding='auto'>
        <Tooltip />
        <Axis dataKey="year" tickLine={null}/>
        <Legend attachLast={true} />
        <Legend dataKey="marker" show={false} />
        <Line position="year*value" color={['country', function(country) {
          if (country === 'Switzerland') return '#0e5b8b';
          return '#dadcf0';
        }]} />
        <Point position="year*value" color={['country', function(country) {
          if (country === 'Switzerland') return '#0e5b8b';
          return '#dadcf0';
        }]} size={['marker', function(marker) {
          if (marker === 'true') return 4;
          return 0;
        }]} style={['country', {
          opacity: 0.6,
          fill: function fill(val) {
            if (val === 'Switzerland') return '#0e5b8b';
            return '#dadcf0';
          },
          lineWidth: 0
        }]}/>
      </Chart>
    );
  }
}
