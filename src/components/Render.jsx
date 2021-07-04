import React from 'react'
import {useDispatch,useSelector} from "react-redux"

import {sortItems,serchConten} from "../redux/actions/getTable"

function Render({items,changeValue,setReverse,reverse}) {

     

        const [active,setActive]=React.useState()
        const dispatch=useDispatch()
        const renderAlltable=()=>{
                changeValue()
        }

        const {pages} = useSelector(({getTable}) =>({pages:getTable.perPage}))
       

        const {lastPage, firstpage}=pages
          const last=lastPage?lastPage:50
          const first=firstpage?firstpage:0

        const changeRevrse=()=>{
                setReverse(!reverse)


        }
        const sortTable=(name)=>{
                

                let result={
                        name,
                        orderNow:reverse,
                        order:function(){
                                return this.orderNow?"asc":"desc"
                        }                     
                        
                }
                


                dispatch(sortItems(result))  

changeRevrse()

               

              }



              const showItem=(num)=>{
                dispatch(serchConten(num));
                setActive(num)
                

              }

            let rendering= items.length>=50?items.slice(first,last)
              :items 
 
        return (
                <div className="container">
                        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col" onClick={()=>{sortTable('id')}}>id</th>
      <th scope="col" onClick={()=>{sortTable('firstName')}}>firstName</th>
      <th scope="col" onClick={()=>{sortTable('lastName')}}>lastName</th>
      <th scope="col" onClick={()=>{sortTable('email')}}>@email</th>

      <th scope="col" onClick={()=>{sortTable('phone')}}>phone</th>
    </tr>
  </thead>
  <tbody>
          { items.length?
          rendering
         .map((element)=>{
                  return <tr
                   key={element.phone}
                    onClick={()=>showItem(element.phone)}
                    className={active===element.phone?"table-success":""
                }
                    
                    
                    >


      <th scope="row" >{element.id}</th>
      <td>{element.firstName}</td>
      <td>{element.lastName}</td>
      <td>{element.email}</td>
      <td>{element.phone}</td>
    </tr>

          }): <tr>
           <th>По вашему запросу нечего не найлдена
             
          </th> 
          <td>  <button className="btn ml-15" onClick={renderAlltable}> Вернутся назад</button></td>
         
           </tr>
          
          }
          
         

          </tbody>
          
          <tfoot>
         <tr>
          {
         rendering.length<30?<td><button className="btn ml-15" onClick={renderAlltable}> 
         Вернутся назад
         </button></td>:""
          }
          </tr>
    </tfoot>
 
</table>
                </div>
        )
}

export default Render
