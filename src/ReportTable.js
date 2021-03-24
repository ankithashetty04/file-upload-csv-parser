import React from 'react'
import FilterResults from 'react-filter-search'
import {Table,Container,Row,Col} from 'react-bootstrap'
import DisplayChart from './DisplayChart'

const ReportTable = (props) => {
    const {participants, userInput} = props
    return (
        <div>
            <Container className = 'col-md-12'>
                <Row>
                    <Col className = 'col-md-10'>
                        <div>
                        <FilterResults 
                            value = {userInput}
                            data = {participants}
                            renderResults = {results => (
                                    <Table responsive = 'sm' striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>  
                                            {results.map((ele,i) => {
                                                    return <tr key = {i}>   
                                                                <td>{ele['Name (Original Name)']}</td>
                                                                <td>{ele['User Email']}</td>                                                   
                                                                <td>{ele['Total Duration (Minutes)']}</td>
                                                            </tr>
                                                })}
                                        </tbody>
                                    </Table>
                            )}
                 />

                        </div>

                    </Col>
                    <Col className = 'col-md-2'>
                        <div>
                            <DisplayChart participants = {participants}/>
                        </div>
                    </Col>
                </Row>
                
            </Container>                 
        </div>
    )
}                    
                   
export default ReportTable