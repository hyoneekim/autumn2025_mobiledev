import visa from './assets/images/visa.png';
import mastercard from './assets/images/master.png';
import "./index.css";

function CreditCard(props) {
  const cardLogo = () => {
    if (props.type === "Visa") return visa;
    if (props.type === "Master Card") return mastercard;
  };

  const digits = String(props.number).slice(-4).padStart(props.number.length,'•');

  return (
    <div className="card" style={{ backgroundColor: props.bgColor, color: props.color }}>
      <img src={cardLogo()} alt={props.type} className="logo" />

      <div className="number">
 
            <span className="digits">{digits}</span>
      </div>

      <div className='info'>
        <span className='exp'>
          Expires {String(props.expirationMonth).padStart(2, '0')}/{String(props.expirationYear).slice(-2)} {props.bank}
        </span>
        <span className='name'>{props.owner}</span>
      </div>
    </div>
  );
}

export default CreditCard;
