import image from './Assets/restauranfood.jpg';
import BasicButton from './Assets/BasicButton';

const Header = () => {
    const head = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // height: '5em',
        alignItems: 'center', //centers items vertically 
        backgroundColor: '#495E57',
        height: '406px',
        gap: '15%',
    }

    const h1 = {
        margin:'0em',
        marginTop: '0em',
        marginBottom: '0em',
        color:'#F4CE14',
        fontFamily: 'Marzaki Text',
        // fontSize: '64pt',
        fontWeight: 'medium',
    }
    const h2 = {
        margin:'0em',
        marginTop:'0em',
        marginBottom:'0em',
        color: 'black',
        fontFamily: 'Karla',
        fontWeight:'bold',
    }
    const p = {
        margin:'0em',
        color: 'white',
    }
    const textArea = {
        display: 'flex',
        flexDirection:'column',
        maxWidth: '400px',
        // alignItems:'left',
        // justifyContent:'center',
        // rowGap:'0',

    }
    const imgStyle = {
        width:'35%',
        height:'75%',
        objectFit:'cover',
        borderRadius:'15px',
        border:'2px solid black',
        maxHeight: '325px',
        maxWidth: '375px',
    }
    
    const buttonDiv = {
        paddingTop: '15px',
    }

    return (
      <header className="header" style={head}>
        <div className="textArea" style = {textArea}>
                <h1 style={h1}>Little Lemon</h1>
                <h2 style= {h2}>Chicago</h2>
                <p style={p}>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with modern twist
                </p>
                <div style={buttonDiv}>
                    <BasicButton text="Reserve a Table"/>
                </div>
        </div>

        <img src={image} alt='food' style={imgStyle}></img>

      </header>
    );
  };

export default Header;