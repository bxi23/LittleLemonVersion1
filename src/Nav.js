import logo from './Assets/Logo.png';

const Nav = () => {
    //Nav Semantic Tag stlye
    const navStyle ={
      backgroundColor: 'white',
      color: 'white',
      height: '45px',
      padding:'10px'
    }
    //Unordered List for Nav Bar
    const navItems = {
        //put items in flexboxes
        display: 'flex',
        flexdirection: 'row',
        gap:'2.5%',
        //remove stlying
        listStyleType: 'none',
        padding: '10px',
        margin: '0px',
        justifyContent: 'center',
        alignItems: 'center',
        height:'90%',

    }
    //List Items in Nav Bar
    const item = {
        // padding: '15px'

    }
    //Applies style to the indivual anchors in nav bar
    const a = {
        textDecoration: 'none',
        color: 'black',
        fontWeight:'bold',
        fontFamily: 'Karla',
        fontSize: '15px',
    }

    const logoStyle = {
        height: '45px',
        display:'inline-block',
        verticalAlign:'middle',
        paddingRight:'30px',
        marginTop: 'auto',
    }

    return (
        <nav className="nav" style = {navStyle}>
          <ul style = {navItems}>
            <li>
                <img src={logo} alt="logo" style={logoStyle}></img>
            </li>
            <li style = {item}><a href="/"  style= {a}>Home</a></li>
            <li style = {item} ><a href="/#about" style= {a}>About</a></li>
            <li style = {item}><a href="/#menu" style= {a}>Menu</a></li>
            <li style = {item}><a href="/reserve" style= {a}>Reservations</a></li>
            <li style = {item}><a href="#order" style= {a}>Order Online</a></li>
            <li style = {item}><a href="#login" style= {a}>Login</a></li>

          </ul>
        </nav>
    );
  };

export default Nav;