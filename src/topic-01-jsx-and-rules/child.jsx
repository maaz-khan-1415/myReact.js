

const Child=()=>{
    return (
    <>
    <h1>child component</h1>
   <h3>{false? "welcome useer" :"please Login"}</h3>
   <h3>{true && "hello"}</h3>
    <label htmlFor=""></label>
    </>
)
};
export default Child;