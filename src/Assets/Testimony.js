import user from "./user.png";
const boxStyle = {
    width:'15%',
    border: '2px solid black',
    borderRadius:'15px',
    backgroundColor:'white',
    maxWidth:'200px',
}

const userStyle ={
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:'30%',
}

const imgStyle = {
    height:'35%',
    width:'35%',
    objFit:'cover',
}
const Testimony = ({name, review}) => {
    return (
        <div className = "box"  style={boxStyle}>
            <div className="items">
                <h3>Rating</h3>
                <div className='user' style={userStyle}>
                    <img src={user} alt="userimg" style={imgStyle}></img>
                    <h3>{name}</h3>
                </div>
                <p>{review}</p>
            </div>
        </div>
    )
}

export default Testimony;