const Card = (props) => {
console.log(props);
  
const {fullname,age,team}=props?.emp;
  
    return (
    <div>
    <div>fullname:{fullname}</div>
      <div>Age:{age}</div>
      <div>Team:{team}</div>
  </div>
  )
};
export default Card;