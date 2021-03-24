import React, { useState } from 'react'
import {Container,Row,Col,InputGroup, FormControl} from 'react-bootstrap'
import ReportTable from './ReportTable'
import 'bootstrap/dist/css/bootstrap.min.css'


const SearchComponent = (props) => {
    const {participants} = props
    const [userInput,setUserInput] = useState('')

    const handleInputChange = (e) => {
        const value = e.target.value
        setUserInput(value)
    }

    return(
        <div>
            <Container className = 'col-md-12'>
                <Row>
                    <Col className = 'col-md-6' > 
                        <InputGroup className = 'mb-3'>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Search</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type = 'text' value = {userInput} onChange = {handleInputChange} placeholder = 'search participants name'
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <ReportTable userInput = {userInput} participants = {participants}/>
                </Row>
            </Container>     
        </div>   
    )
}

export default SearchComponent