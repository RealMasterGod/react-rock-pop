import ListItem from "../listItem/ListItem"
import "./list.css"

const List = () => {
    return (
        <div className='list'>
            {[...Array(8)].map((item,i) => (
                <ListItem key={i} />
            ))}
        </div>
    )
}

export default List
