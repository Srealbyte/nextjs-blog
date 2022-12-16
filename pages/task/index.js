import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import TaskCard from "../../components/TaskCard";
// CSS styles
const Container = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 5px #1976D2;
    padding: 30px;
    border-radius: 5px;
`

const Input = styled.div`
    display: flex;
    align-items: center;
    button {
        margin-left: 15px;
    }
`

const List= styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 20px;
`
// ID Variable
let count = 1
// Variable used to validate the text box
let isTodoValid = false

function Task() {
    //React Hooks
    const [tasks, setTasks] = useState([])
    const [inputValue,setInputValue] = useState("")
    
    //Changes in the input field call the setter
    const handleInputChange = (event) => {
        isTodoValid = !!event.target.value
        setInputValue(event.target.value)
    }
    
    //On click pass in the new Tasks Title,
    const handleInputClick = ()  => {
        
        setTasks(
            [
                ...tasks,
                {
                    title: inputValue,
                    isDone: false,
                    id: count
                }
            ]
        )
        count ++
        setInputValue('')
        isTodoValid = false
    }
    //On click inverse the isDone boolean value of the given Id
    const toggleDone = (id) => {
        const newTasks = tasks.map(task => {
            if(task.id === id) {
                return {
                    ...task,
                    isDone: !task.isDone
                }
            }
            return task
        })
        setTasks(newTasks)
    }

    
    /* Got the Two Components from MUI: TextField, Button
    disabled the add button empty Task Entry
    
    */
    return (
        <Container>
            <div className= 'task'>
                <Input>
                    <TextField value={inputValue} onChange={handleInputChange} id="outlined-basic" label="Task" variant="outlined" />
                    <Button onClick={handleInputClick} variant="contained"disabled={!isTodoValid}>Add</Button>
                </Input>
                <List>
                    {
                        tasks.map(task => {
                            return <TaskCard onClick={toggleDone} {...task} />
                        })
                    }
                    
                </List>
            </div>
        </Container>
    );
}

export default Task