import "./card.css";
const Card = (props) => {
console.log(props);
    let{name,age,institue,image}=props?.players;
  return (
    <div className="card">
        <div className="profile">
            <img src={image} alt=""/>
        </div>
        
        <div className="info">
            <div>name:{fullname}</div>
            <div>age:{age}</div>
            <div>institue:{institue}</div>
        
        </div>
    </div>
  )
};
export default Card;