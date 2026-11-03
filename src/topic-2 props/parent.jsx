import Card from "./card";


export const Parent  = () => {
  const fullname="virat kohli";
  const age=38;
  return (
  <>
  <Card fullname={fullname} age={age}/>
  </>
  )
};
export default Parent;
