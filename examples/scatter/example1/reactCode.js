export const template = `
<div>
  <Chart forceFit height={400} data={data} dataMapping={dataMapping}>
    <Tooltip />
    <Axis dataKey={'weight'} show={true} position={'left'}/>
    <Axis dataKey={'height'} show={true} position={'bottom'}/>
    <Legend dataKey={'gender'} marker={'circle'}/>
    <Series geom={'point'} postion={['height', 'weight']} quickType={'point'} shape={'circle'}></Series>
  </Chart>
</div>
`;
