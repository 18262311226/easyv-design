import * as echarts from 'echarts';
import { useEffect, useState } from 'react';

function Pie1 (props) {

    const [options, setOptions] = useState({
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
    })

    useEffect(() => {
        // 基于准备好的dom，初始化echarts实例
        const pie1 = echarts.init(document.getElementById('pie1'));
        pie1.setOption(options)
    }, [])

    return (
        <div id="pie1" style={{position: 'absolute', top: 350, left: 100, width: 350, height: 300}}></div>
    )
}

export default Pie1