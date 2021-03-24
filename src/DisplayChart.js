import React from 'react'
import Chart from "react-google-charts";

const DisplayChart = (props) => {
    const {participants} = props

    const participantsData = participants.filter(ele => ele.Guest === 'Yes' )

    const chartData = participantsData.map((ele) =>{
      return  [ele['Name (Original Name)'], Number(ele['Total Duration (Minutes)'])]
    })

      return(
        
            <div style={{ display: 'flex', maxWidth: 900 }}>
                <Chart
                  width={600}
                  height={300}
                  chartType="ColumnChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    
                    ['Students Name', 'Minutes attended' ],
                    ...chartData
                  ]}

                  options={{
                    title: 'Zoom meeting participants',
                    chartArea: { width: '60%' },
                    hAxis: {
                      title: 'Students Name',
                      minValue: 0,
                    },
                    vAxis: {
                      title: 'Minutes attended',
                    },
                  }}
                  legendToggle
                />
                      </div>
                  )
              }

export default DisplayChart