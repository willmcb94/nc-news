import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material"
import { useContext, useState } from 'react';
import { postComment } from '../api';
import { UserContext } from '../contexts.js/UserContext';

const PostComment = ({ id, setComments }) => {
    const { user } = useContext(UserContext)
    const initialValues = {
        username: user,
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
            if (postValue.body.length < 1) {
                throw Error
            }
            alert(`Comment posted - ${comment.body}`)
            setComments((currentComments) => {
                return [...currentComments, comment]
            })
            setPostValue(initialValues)
        } catch (err) {
            console.dir(err)
            alert(`Comment failed to post - please makes sure you are signed in and try again`)
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