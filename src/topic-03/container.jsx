import Card from "./card";

const Container=()=>{
    const p1={
        fullname:"virat kohli",
        age:23,
        team:"india"
    }

    return(
        <div>
            <Card emp={p1}/>
        </div>
    )
};
export default Container;