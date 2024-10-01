import "./listItem.css"

const ListItem = () => {
    return (
        <div className="listItem">
            <div className="listItemImgContainer">
                <img className="itemImg" src="/foodItem.png" alt="" />
            </div>
            <div className="ItemText">
                    <span>Crystal Agate Phone Grip</span>
                    <span>18.99$</span>
            </div>
            <button className="buyButton">BUY NOW</button>
        </div>
    )
}

export default ListItem
