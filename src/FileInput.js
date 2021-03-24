import React, { useState } from 'react'
import ReportComponent from './ReportComponent'
import {parse} from 'papaparse'
import {Button} from 'react-bootstrap'

const FileInput = (props) => {
    const [selectedFile, setSelectedFile] = useState('')
    const [isFileUploaded, setIsFileUploaded] = useState(false)
    const [participants,setParticipants] = useState([])

    const handleChange = (e) => {
        setSelectedFile(e.target.files[0])
    }
    
    const handleSubmission = (e) =>{
        e.preventDefault()

        if(selectedFile){
            setIsFileUploaded(true)   
            parse(selectedFile, {
                download:true,
                header: true,
                complete: (result) =>{
                    const dataArr = result.data.map((ele) => {
                        return ele
                    })            
                    setParticipants(dataArr)               
                },
                error:(err) => {
                    alert(err.message)
                }
            })
            
        }
                
    }

    return(
        
        <div className = 'mt-3 ml-3'>
            <div><h1>File Upload + CSV parser</h1></div>
            <input type="file"  onChange = {handleChange} required/>
            <Button variant = 'dark' onClick = {handleSubmission}>Upload File</Button>
            
            <div>
                {
                  isFileUploaded && <ReportComponent participants = {participants}/>
                }
            </div>
        </div>

    )
}

export default FileInput