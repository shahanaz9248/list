import React,{useState} from 'react'
import './list.css'
export default function List3() {
 const [list, setList] = useState(["HARRY POTTER", "PANCHATANTHRA KATHALU"]);
       const [removedList,setRemovedList]=useState([]);
     
       // Function to add items to the list
       function add() {
         const ip3= document.getElementById("ip3").value.trim();
           if(ip3){   
            const up=ip3.toUpperCase();
            const same=list.filter((item)=>item===up)  
            if(same.length>0){
                alert("item already exist");
            }else{
                setList([...list,up]);
                document.getElementById("ip3").value = "";
            }
           }
       }
     
       // Function to remove a particular item from the list
       function rem(index) {
         const removedItem=list[index];
         const updatedList = list.filter((item, itemIndex) => itemIndex !== index);    
         setRemovedList([...removedList,removedItem]);
         setList(updatedList);   
       }
     
       function restore(index){
          const restoredItem=removedList[index];
          const updatedRemovedList=removedList.filter((item,itemIndex)=>itemIndex!==index)
          setList([...list,restoredItem]);
          setRemovedList(updatedRemovedList);
          
       }
     
       function permanentlyRemove(index){
           const updatedRemovedList=removedList.filter((item,itemIndex)=>itemIndex!==index);
           setRemovedList(updatedRemovedList);
       }
     
       return (
         <div style={{display:"flex",gap:"20px",justifyContent:"space-around",alignItems:"flex-start"}}>
         <div>
         <h2 style={{marginTop:"0px",color:"#4ECDC4"}}>Favourite Story Books</h2>
           <input type="text" id="ip3" placeholder="Enter Book" />&nbsp; &nbsp;
           <button onClick={add} className="bt">Add Book</button>
             <div className="l">{list.map((item, index) => (
               <li key={index}>
                 {item}
                 <img src="https://img.icons8.com/?size=100&id=11767&format=png&color=FFFFFF"  alt="Remove" title="Remove" onClick={() => rem(index)} style={{ cursor: "pointer", marginLeft: "10px",width:"18px",height:"18px" }}/>
               </li>
             ))}
             </div>
         </div>
     
         <div>
           <div style={{color:"#4ECDC4"}}><strong>Removed Items</strong></div>
           {removedList.map((item,index)=>(<li key={index}>{item}
             <img
               src="https://cdn.iconscout.com/icon/premium/png-256-thumb/restore-4072008-3369420.png?f=webp&w=256"
               alt="Restore"
               title="Restore"
               style={{ width: "20px", height: "20px",cursor:"pointer",marginLeft:"10px" }} 
               onClick={()=>restore(index)}
             />
             <img src="https://img.icons8.com/?size=100&id=11767&format=png&color=FFFFFF" alt="remove permanently" title="permanently" style={{ width: "18px", height: "18px",cursor:"pointer",marginLeft:"10px",backgroundBlendMode:""}} onClick={()=>permanentlyRemove(index)}></img>
             </li>))}
         </div>
         </div>
       );
}
