import {getApi as API} from './API'

const setLoaded=(val)=>({
        type:"SET_LOADED",
        payload:val,
})
//        // &

export const getTable=(result,btn="info")=>async(dispatch)=>{

dispatch(setLoaded(false))


  let key     
if(btn==="info"){
key=`http://localhost:3001/contanrs?_sort=${result.name}&${result.order?`_order=${result.order()}`:""}`
 
}else if(btn==="danger"){


key=`http://localhost:3002/container1000?_sort=${result.name}&${result.order?`_order=${result.order()}`:""}`


//${value.name?`firstName=${value.name}`:""}&${value.phone?`phone=${value.phone}`:""}
 
}


       await API(key).then(data=>{
        dispatch(setLoaded(false))

        dispatch(getItems(data))

})
       
}
        

export const getItems=(val)=>({
        type:"GET_ITEMS",
        payload:val
})


export const sortItems=(val)=>({
        type:"SORT_ITEMS",
        payload:val
})

export const serchConten=(val)=>({
        type:"SEARCH_CONTENT",
        payload:val
})

export const getPageCount=(val)=>({
        type:"PAGE_COUNT",
        payload:val
})

export const searchUser=(val)=>({
        type:"SEARCH_USER",
        payload:val
})