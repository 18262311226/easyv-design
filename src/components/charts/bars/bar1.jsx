import * as echarts from 'echarts';
import { useEffect, useState } from 'react';

function Bar1 (props) {

    const [options, setOptions] = useState({
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
    })

    useEffect(() => {
        // 基于准备好的dom，初始化echarts实例
        const bar1 = echarts.init(document.getElementById('bar1'));
        bar1.setOption(options)
    }, [])

    return (
        <div id="bar1" style={{position: 'absolute', top: 20, left: 100, width: 300, height: 300}}></div>
    )
}

export default Bar1