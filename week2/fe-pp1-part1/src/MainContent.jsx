import IdCard from "./IdCard";
import "./index.css"
import Random from "./Random";

function MainContent(){
    return (
            <div>
      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={176}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={174}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<Random min={1} max={6}/>
<Random min={1} max = {108}/>
    </div>

    )
}

export default MainContent;