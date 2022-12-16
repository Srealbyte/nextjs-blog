
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import BlogCard from "../../components/BlogCard";

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

const initialFormValue = {
    title: "",
    post: ""
}
const generateRandomId = () => {
    const time = new Date().getTime();
    return time.toString();
}

function Blog() {
    const [blogs, setBlogs] = useState([]);

    const [form, setForm] = useState(initialFormValue)

    const handleInputChange = (event) => {
        setForm((currentForm) => {
            return { ...currentForm, [event.target.name]: event.target.value }
        })
    }

    const handleAdd = (event) => {
        if (!form.title || !form.post) {
            return;
        }

        setBlogs((currentBlog) => {
            return [...currentBlog, { id: generateRandomId(), title: form.title, post: form.post }]
        });
        setForm(initialFormValue);
    }

    const isFormValid = !!form.title && !!form.post;

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