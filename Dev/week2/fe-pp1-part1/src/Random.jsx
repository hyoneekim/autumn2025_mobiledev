function Random(props){
    const result = Math.floor(Math.random()*(props.max-props.min)+props.min)
return (
    <div className="random">
    <p>Random value between {props.min} and {props.max} = &gt; {result}</p>
    </div>
)
}

export default Random;