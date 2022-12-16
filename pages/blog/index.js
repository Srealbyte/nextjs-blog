
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import BlogCard from "../../components/BlogCard";
// CSS styles
const Container = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`
const Form = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 20px;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`

const List = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 20px;
`
//Initial Form 
const initialFormValue = {
    title: "",
    post: ""
}
//Id Variable
let count = 1

function Blog() {
    //React Hooks
    //Blog array that store the all the Blogs 
    const [blogs, setBlogs] = useState([]);
    //Form Object containing a Title and a Text Entry
    const [form, setForm] = useState(initialFormValue)

    //Handle the Input of the form and pass the input into the form object. 
    const handleInputChange = (event) => {
        setForm((currentForm) => {
            return { ...currentForm, [event.target.name]: event.target.value }
        })
    }
    //On Click the add Button this toggle which add form object to the Blog Array
    //While increasing the ID value and Resetting the Form
    const handleAdd = (event) => {
        setBlogs((currentBlog) => {
            return [...currentBlog, { id: count, title: form.title, post: form.post }]
        });
        count++
        setForm(initialFormValue);
    }
    //Validation of the form object, Disable the button if falsey
    const isFormValid = !!form.title && !!form.post;
    //Three Components from MUI: Required TextField, Multiline TextField, and Button 
    return (
        <>
            <Container>
                <Form>
                    <TextField
                        required
                        id="outlined-required"
                        name="title"
                        label="Title"
                        placeholder="Enter Title"
                        value={form.title}
                        onChange={handleInputChange}/>
                    <TextField
                        id="outlined-multiline-static"
                        name="post"
                        label="Text Entry"
                        multiline
                        rows={4}
                        placeholder="Blog Entry"
                        value={form.post}
                        onChange={handleInputChange} />
                    <Button variant="contained" onClick={handleAdd} disabled={!isFormValid}>Add</Button>
                </Form>

            </Container>
            <>
                {
                    blogs.map((blog, index) => {
                        return <BlogCard key={blog.id} title={blog.title} post={blog.post} index={index} />
                    })
                }
            </>

        </>

    );
}

export default Blog