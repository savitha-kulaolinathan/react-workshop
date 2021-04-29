
 const Color =(props) =>{
     return(
         <button className ="Color" style ={{backgroundColor:props.color}}
          onClick ={props.onClick}>

         </button>
     )
 };
  export default Color; 