import { useEffect, useState } from "react"

import { useSearchParams } from "react-router-dom"
import { fetchTopics } from "../api"

const TopicsDropdown = ({ paramTopic, paramSort }) => {
    const [setSearchParams] = useSearchParams()
    if (paramTopic === undefined) {
        paramTopic = 'all'
    }

    const [topics, setTopics] = useState([])



    useEffect(() => {

        fetchTopics().then((topics) => {

            setTopics(topics)

        });
    }, [])

    const handleChange = ({ target: { value } }) => {

        if (value === 'all') {
            const params = {}
            if (paramSort) {
                params.sort_by = paramSort
            }

            setSearchParams(params)

        } else {
            const params = {
                topic: value,

            }
            if (paramSort) {
                params.sort_by = paramSort
            }
            setSearchParams(params)

        }
    }


    return (
        <div className="dropdown">
            <label className="dropdown-label" htmlFor="topic">Topics:</label>
            <select className="dropdown-options" name="topics" id="topics" onChange={(e) => handleChange(e)} value={`${paramTopic}`}>

                <option key="all" value="all">all</option>
                {topics.map((topic, index) => {
                    if (paramTopic === topic.slug) {
                        return <option key={`topic-${index}`} value={topic.slug} >{topic.slug}</option>
                    }
                    return <option key={`topic-${index}`} value={topic.slug}>{topic.slug}</option>
                })}
            </select>

        </div>

    )

}

export default TopicsDropdown