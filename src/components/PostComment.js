import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material"
import { useState } from 'react';
import { postComment } from '../api';

const PostComment = (id) => {
    const initialValues = {
        username: "jessjelly",
        body: ""

    };
    const [postValue, setPostValue] = useState(initialValues)

    const set = (field) => {
        return ({ target: { value } }) => {

            setPostValue({ ...initialValues, [field]: value });

        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const comment = await postComment(id, postValue)
            console.log(comment)
            alert(`Comment posted - ${comment.body}`)
        } catch (err) {
            console.log(err)
            alert(`Comment failed to post - please try again`)
        }

    }

    return (<section className="comment-post">
        <h3>Post a comment</h3>

        <form className="comment-form" id="add-comment" onSubmit={handleSubmit}>
            <input className="comment-input" type="text" onChange={set("body")}
                value={postValue.body}></input>
            <Button type="submit" variant="contained" size="small" color="inherit" endIcon={<SendIcon />}>
                Submit
            </Button>
        </form>


    </section>)
}

export default PostComment