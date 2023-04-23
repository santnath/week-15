import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';


const endpoint = 'https://643889f74660f26eb19e713b.mockapi.io/team';

const ReadTeam = () => {
    const[apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(endpoint)
        .then((response) => {
            setApiData(response.data);
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://643889f74660f26eb19e713b.mockapi.io/team/${id}`);
    }

    return(
        <div>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Full Name</Table.HeaderCell>
                        <Table.HeaderCell>Department</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            <Table.Body>
                {apiData.map((data) => {
                   return (
                     <Table.Row>
                        <Table.Cell>{data.name}</Table.Cell>
                         <Table.Cell>{data.department}</Table.Cell>
                         <Button onClick={() => {handleDelete(data.id)}}>Delete</Button>
                      </Table.Row>
                )})}

            </Table.Body>
          
        </div>
    )
}

export default ReadTeam;