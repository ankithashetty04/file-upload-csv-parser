import React from 'react'
import duration from 'format-duration-time'
import SearchComponent from './SearchComponent'

const ReportComponent = (props) =>{
    const {participants} = props

    const host = participants.filter((ele) => {
               return ele.Guest === 'No'
   })

    const name = host.map(e => e['Name (Original Name)'])
    const totalMins = host.map(e => e['Total Duration (Minutes)'])
  
   const time = `${totalMins} minutes ( ${(duration(totalMins, 'm').format('h [hours and] m [minutes] ' )) })`

    return(
        <div>
            <hr/>
            
            <div>
                <h1>Report</h1>
                <h2>Host - {name}</h2>
                <h2>Total Participants - {participants.length}</h2>
                <h2>Duration - {time} </h2>
            </div>  
            <SearchComponent participants = {participants}/>         
        </div>
    )
}

export default ReportComponent