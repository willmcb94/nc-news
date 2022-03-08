import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { fetchTopics } from "../api"

const TopicsDropdown = ({ paramTopic }) => {

    if (paramTopic === undefined) {
        paramTopic = 'All'
    }

    const [topics, setTopics] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        fetchTopics().then((topics) => {

            setTopics(topics)
        });
    }, [])

    const handleChange = ({ target: { value } }) => {

        if (value === 'All') {
            navigate(`/articles`)

        } else {
            navigate(`/articles?topic=${value}`)

        }
    }


    return (
        <div className="dropdown">
            <label className="dropdown-label" htmlFor="topic">Topics:</label>
            <select className="dropdown-options" name="topics" id="topics" onChange={(e) => handleChange(e)}>
                {!paramTopic ? <option key="All" value="All" selected>All</option>
                    : <option key="All" value="All">All</option>}

                {topics.map((topic, index) => {
                    if (paramTopic === topic.slug) {
                        return <option key={`topic-${index}`} value={topic.slug} selected>{topic.slug}</option>
                    }
                    return <option key={`topic-${index}`} value={topic.slug}>{topic.slug}</option>
                })}
            </select>

        </div>

    )

}

export default TopicsDropdown