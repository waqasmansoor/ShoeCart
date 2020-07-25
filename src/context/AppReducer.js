export default (state,action)=>{
    switch(action.type){
        case 'ADD':
            return(
            
            [action.payload,...state]
            )
            
        case 'INC':
            
            for(var i=0;i<state.length;i++){
                if(state[i].id===action.id){
                    state[i].count=state[i].count+1}
            }
            
                return(
                    [...state]
                )
                
              
                
            
     
        case 'DEC':
            
            var del_id=''
            
            for(var j=0;j<state.length;j++){
                if(state[j].id===action.id){
                    state[j].count=state[j].count-1
                    if(state[j].count===0){
                        del_id=state[j].id
                    }
                }
            }

             return(
                 state.filter((k)=>{
                     return(k.id!==del_id)
                 })
             )
    
        default:
             return state;
    }
}