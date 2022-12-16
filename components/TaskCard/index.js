import styled from "styled-components"

const Card =styled.div`
    border: 2px solid RGB(25, 118, 210);
    border-left:solid 6px gray;
    gap: 25px;
    text-align: center;
    font-size: 20px;
    padding: 15px 20px;
    border-radius: 5px;
    ${({ isDone }) => isDone && `
        border-left:solid 6px green;
    `}
`


function TaskCard({ title, isDone, id, onClick }) {
    return <Card isDone={isDone} onClick={() => onClick(id)}>
        {id} {title}
    </Card>
}

export default TaskCard