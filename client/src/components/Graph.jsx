import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
// import Labels from './Labels';
// import { chart_Data, getTotal } from '../helper/helper'
// import {default as api} from '../store/apiSlice';

Chart.register(ArcElement);

export default function Graph() {
		const config = {
			data: {
				datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4,
					borderRadius: 30,
					spacing: 10,
        }]
			},
			options: {
				cutout: 115,
			}
		}

  return (
    <div className="flex justify-content max-w-xs mx-auto">
        <div className="item">
            <div className="chart relative">
                <Doughnut {...config}></Doughnut>
                <h3 className='mb-4 font-bold title'>Total
                    <span className='block text-3xl text-emerald-400'>$3</span>
                </h3>
            </div>
        </div>
    </div>
  )
}
