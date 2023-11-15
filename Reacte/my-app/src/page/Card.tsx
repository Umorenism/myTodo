import React from 'react'
import ITodo from './interface'
import styled from 'styled-components'

interface props {
    task: ITodo;
    ComleteTask(taskDelete: string): void;
}

const Card = ({ task, ComleteTask }: props) => {
    return (

        <Main>
            <Content>
                <P>Task: {task?.taskName}</P>
                <H>Deadline: {task?.deadline}</H>
                <Button
                    onClick={() => {
                        ComleteTask(task.taskName);
                    }}
                >x</Button>
            </Content>

        </Main>

    )
}

export default Card
const H = styled.div`
position: absolute;
right: 100px;
padding:2px;
font-size: 15px;
color:red;
font-weight: 600;
@media screen and (max-width:760px) {
       flex-wrap: wrap;
       display: flex;
       align-items: center;
       justify-content: center;
    }
`
const P = styled.div`
padding: 2px;
color:silver;
font-size: 20px;
font-weight: 600;
@media screen and (max-width:760px) {
       flex-wrap: wrap;
       display: flex;
       align-items: center;
       padding-top: 10px;
       justify-content: center;
    } 

`
const Button = styled.button`
width: 10%;
background-color: black;
color: white;
font-weight: 600;
border: none;
`
const Content = styled.div`
 margin: 5px;
 border: 1px solid silver;
 width: 100%;
 display: flex;
 justify-content: space-between;
 border: 1px solid silver;
 position: relative;

`
const Main = styled.div`
min-height:50px;
width: 100%;
display: flex;
justify-content: space-between;
/* background-color: silver; */
`
