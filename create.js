import React, {useState} from "react";
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import '../App.css';

const endPoint = "https://643889f74660f26eb19e713b.mockapi.io/team";


const Create = () => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    
    
    const PostData = (event) => { 
        event.preventDefault();

        axios.post(endPoint, {
            name,
            department
        }) 
    }

    const LogData = () => {
        console.log(name);
        console.log(department);
    }

    return(
        <div>
            <h2>Add Team Member</h2><br></br>
            <Form className="create-form">
                <Form.Field>
                    <input name="name" placeholder="Full Name" 
                    onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Department' name="department"
                      onChange={(e) => setDepartment(e.target.value)} />
                </Form.Field>
            <Button type='submit' onClick={PostData}>Submit</Button>
            </Form>

        </div>
    )
}

export default Create;