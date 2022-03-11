import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material"
import { useContext, useState } from 'react';
import { postComment } from '../api';
import { UserContext } from '../contexts.js/UserContext';

const PostComment = ({ id, setComments }) => {
    const { user } = useContext(UserContext)
    const [success, setSuccess] = useState(null)
    const [err, setErr] = useState(null)
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
        setSuccess(null)
        setErr(null)
        try {

            if (postValue.body.length < 1) {

                throw Error

            }
            const comment = await postComment(id, postValue)


            setSuccess(`Comment posted`)

            setComments((currentComments) => {

                return [...currentComments, comment]

            })
            setPostValue(initialValues)
        } catch (err) {

            if (postValue.body.length < 1) {

                setErr('Comment too short')

            } else {

                setErr('Comment unsuccesful - please sign in if not already')
            }
        }

    }

    return (<section className="comment-post">

        <h3>Post a comment</h3>

        <form className="comment-form" id="add-comment" onSubmit={handleSubmit}>
            <textarea className="comment-input" type="text" onChange={set("body")}
                value={postValue.body} rows="4" cols="50" ></textarea>
            <Button type="submit" variant="contained" size="small" color="inherit" endIcon={<SendIcon />}>
                Submit
            </Button>
        </form>
        <dt className="err-success">{success}</dt>
        <dt className="err-success">{err}</dt>

    </section>)
}

export default PostComment