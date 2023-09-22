
import axios from 'axios';


async function geter(){
  const res = await fetch("http://localhost:3000/api/users")
  return res.json();
}


export async function Lol() {

  const x = await geter();
  console.log(x);
  

  
  
  
  return (
    <div>
      {
        x.map((el:any, idx:any) => {
          return(
            <h1 key={idx}>{el.name}</h1>
          )
        })
      }
      
    </div>
  )
}
