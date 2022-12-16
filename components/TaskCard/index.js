import styled from "styled-components"
// CSS styles
const Card =styled.div`
    border: 2px solid RGB(25, 118, 210);
    border-left:solid 6px gray;
    gap: 25px;
    text-align: center;
    font-size: 20px;
    padding: 15px 20px;
    border-radius: 5px;
    &:hover {
        cursor:pointer;
    }
    ${({ isDone }) => isDone && `
        border-left:solid 6px green;
    `}
`

//Task Card
function TaskCard({ title, isDone, id, onClick }) {
    return <Card isDone={isDone} onClick={() => onClick(id)}>
        {title}
    </Card>
}

export default TaskCard