 
import Card from "./card"
const Container = () => {
  
    const players=[
        {
            name:"maaz khan",
            age:23,
            institue:"jqspider",
            image:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400"
        },
        {
            name:"ayankhan",
            age:23,
            institue:"jqspider",
            image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
        },
        {
            name:"ahmad khan",
            age:23,
            institue:"jqspider",
            image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
        },
        {
            name:"shaan khan",
            age:23,
            institue:"jqspider",
            image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
        }
    ];
  
  
    return (
  <div className="container">
        {
   
    players.map((element,index)=> <Card key={index} players={element}/>)
    
   }
   </div>
  )

};
export default Container;