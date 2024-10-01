import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="logo">
                    <div className="logoImg">
                        <img src="/logo.png" alt="" />
                    </div>
                    <span className="logoText">Pop Rock Crystal</span>
                </div>
                <div className="rightWrapper">
                    <div className="links">
                        <span>Home</span>
                        <span>Shop</span>
                        <span>About Us</span>
                        <span>Help</span>
                    </div>
                    <div className="cart">
                        <div className="badge">00</div>
                        <div className="cartImg">
                            <img src="/cart.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
