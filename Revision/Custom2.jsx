
import Custom1 from "./Custom1";
const Custom2 = () =>{

    const [data]  = Custom1("https://jsonplaceholder.typicode.com/posts")

    return (
        <>
          {
            data && 
                 data.map((item)=>{
                    return <p key={item.id}>{item.title}</p>
                 })
          }
          <Custom1/>
        
        </>
    )
}

export default Custom2