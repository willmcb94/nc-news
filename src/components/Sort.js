
import { useSearchParams } from "react-router-dom"


const Sort = ({ paramSort, paramTopic }) => {
    const [setSearchParams] = useSearchParams()


    if (paramSort === undefined) {
        paramSort = "date"
    }
    const handleChange = ({ target: { value } }) => {

        if (value === 'date') {

            const params = {}
            if (paramTopic) {
                params.topic = paramTopic
            }

            setSearchParams(params)


        } else {
            const params = { sort_by: value }
            if (paramTopic) {
                params.topic = paramTopic
            }
            setSearchParams(params)
        }
    }

    const sortBy = ["comment_count", "votes"]
    return (
        <div className="sort-dropdown">
            <label className="dropdown-label" htmlFor="sort">Sort</label>
            <select className="dropdown-options" name="sort-by" id="sortBy" onChange={(e) => handleChange(e)} value={`${paramSort}`}>

                <option key="date" value="date">date</option>
                {sortBy.map((sort, index) => {

                    return <option key={`sort-${index}`} value={sort}>{sort}</option>
                })}
            </select>

        </div>

    )
}

export default Sort