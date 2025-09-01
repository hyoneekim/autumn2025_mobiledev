function IdCard(props){
    return (
        <div className="idcard">
            <div className = "pic">
                <img src = {props.picture} />
                </div>
            <div className="contents">
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;