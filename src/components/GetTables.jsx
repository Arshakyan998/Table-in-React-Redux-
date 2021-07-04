import { getSuggestedQuery } from '@testing-library/react'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

import {getTable,searchUser} from '../redux/actions/getTable'
import FilterNames from './FilterNames'
import Render from './Render'

function GetTables({btn}) {
        const dispatch=useDispatch()
        const [value, setValue]=React.useState("")
        const [reverse,setReverse]=React.useState(false)


        const  {items,isLoaded,sort} = useSelector(state => ({
                items:state.getTable.items,
                isLoaded:state.getTable.isLoaded,
                sort:state.getTable.sort,
        }))

       



        const changeState=(val)=>{
                setValue(val)
        }

       
 

         
        React.useEffect(()=>{
                if(value===""){
        dispatch(getTable(sort,btn))
                }  
        
        },[value])



  
        

React.useEffect(()=>{
dispatch(getTable(sort,btn))
        

},[sort,btn])


      React.useEffect(()=>{
              if(value !==""){
                      dispatch(searchUser(value)) 
              }
         
                      
                
                  
        },[value]) 


       const changeValue=()=>{
        setValue("")
        }
        return (
                <div>
                        {
                                isLoaded&&<FilterNames changeStateTable={changeState}/>
                        }

                     
                                {isLoaded?
                                 <Render items={items} 
                                 changeValue={changeValue}
                                  setReverse={setReverse}
                                  reverse={reverse}
                                  
                                  />:
                                <div className={isLoaded?"hidden":"loader"}/>
                                
                                
                                }
                                
                                
                        
                       
                        
                </div>
        )
}

export default GetTables
