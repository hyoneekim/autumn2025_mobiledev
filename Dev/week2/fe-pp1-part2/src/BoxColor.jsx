function BoxColor(props) {

    const boxColor = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        width: '500px',
        height: '100px',
        fontSize: '24px',
        padding: '10px',
        border: '1px solid black'
    };

    const rgbToHex = () => `#${props.r.toString(16).padStart(2, '0')}${props.g.toString(16).padStart(2, '0')}${props.b.toString(16).padStart(2, '0')}`
return (
    <div style={boxColor}>
        <p>{boxColor.backgroundColor}</p>
        <p>{rgbToHex()}</p>

    </div>
)
};

export default BoxColor;