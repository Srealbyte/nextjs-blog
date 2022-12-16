import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import TaskCard from "../../components/TaskCard";

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
let count = 1
function Task() {
    const [tasks, setTasks] = useState([])
    const [inputValue,setInputValue] = useState("")

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    

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
    }

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

    return (
        <Container>
            <div className= 'task'>
                <Input>
                    <TextField value={inputValue} onChange={handleInputChange} id="outlined-basic" label="Todo item" variant="outlined" />
                    <Button onClick={handleInputClick} variant="contained">Add</Button>
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