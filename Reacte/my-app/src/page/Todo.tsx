import React, { ChangeEvent, useState } from 'react'
import ITodo from './interface';
import Card from './Card';
import styled from 'styled-components'

const Todo = () => {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0)
    const [todoList, setTodoList] = useState<ITodo[]>([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "task") {
            setTask(e.target.value)
        } else {
            setDeadline(Number(e.target.value))
        }
    }

    const addTask = () => {
        const newTask = { taskName: task, deadline: deadline }
        setTodoList([...todoList, newTask])
        setTask("")
        setDeadline(0)

    }

    const ComleteTask = (taskDelete: string) => {
        setTodoList(todoList.filter((task) => {
            return task.taskName != taskDelete
        }))
    }
    return (
        <Container>
            <Main>

                <Wrap>
                    <Div>
                        <Input placeholder=' task' name='task' type='text' onChange={handleChange} value={task} />
                    </Div>
                    <Div>
                        <Input placeholder='enter deadline' type='number' name='deadline' onChange={handleChange} value={deadline} />
                    </Div>
                    <Btn>
                        <Button onClick={addTask}>Add task</Button>
                    </Btn>

                    <TodoList>
                        {todoList.map((task: ITodo, key: number) => (
                            <Card key={key} task={task} ComleteTask={ComleteTask} />
                        ))}
                    </TodoList>
                </Wrap>
            </Main>
        </Container>
    )
}

export default Todo

const TodoList = styled.div`
    width:100%;
    min-height: 300px;
    background-color: white;
    @media screen and (max-width:760px) {
       flex-wrap: wrap;
    } 
`
const Btn = styled.div`
 display: flex;
    justify-content: center;
    align-items: center;  
    @media screen and (max-width:760px) {
       width: 100%;
    } 
`
const Button = styled.button`
    padding: 10px;
    width: 20%;
    background-color:black;
    color: white;
    font-weight: 600;
    border: none;
    margin: 8px;
    transition: 1s;
    &:hover{
        background-color: green;
        cursor: pointer;
    }
    
`
const Div = styled.div`
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:760px) {
        flex-direction: column;
    }
`
const Input = styled.input`
    height: 30px;
   width: 80%;
   outline: none;
   border: none;
   
`
const Wrap = styled.div`
    width: 60%;
   min-height:200px;
    background-color:purple;
    margin: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
`
const Main = styled.div`
    width: 90%;
   min-height: 200px;
    background-color:white;
    display: flex;
    margin-top: 30px;
    justify-content: center;
`
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width:760px) {
    width: 60%;
    background-color: orange;
}

   
`