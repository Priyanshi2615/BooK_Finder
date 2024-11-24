import "../App.css";
const Navbar=()=>{
    return(
        <nav className="navbar">
          <div className="logo">
            BOOK <span>FINDER</span>
          </div>
          
          <div className="auth-buttons">
            <button className="signin-btn">Signin</button>
            <button className="signup-btn">Signup</button>
          </div>
        </nav>
    )
}
export default Navbar;