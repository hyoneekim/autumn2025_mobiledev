function IdCard(props){
    return (
        <div className="idcard">
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth.toDateString()}</p>
            <img src = {props.picture} />
        </div>
    )
}

export default IdCard;