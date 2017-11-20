export const template = `
<div>
  <Chart forceFit height={400} data={data} dataPre={dataPre} dataMapping={dataMapping} scale={scale}>
    <Tooltip />
    <Axis />
    <Line style={{ stroke: 'red', lineWidth: 1 }} />
  </Chart>
</div>
`;
