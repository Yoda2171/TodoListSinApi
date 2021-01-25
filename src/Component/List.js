import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Input from "./Input";    
import Todo from "./Todo";

function List() {
    let [lists, setLists] = useState([]);

    function addList(list) {
        if(!list.text || /^\s*¨$/.test(list.text)){
          return
        }

        let newLists = [list, ...lists];

        setLists(newLists);
        
    }


    function removeList (id) {
        let removeArr = [...lists].filter(list => list.id !== id);

        setLists(removeArr);
        
    };




    let completeList = id => {
        let updateLists = lists.map(list => {
            if (list.id === id) {
                list.isComplete = !list.isComplete;
            }
            return list;
        });
        setLists(updateLists);
    }
    
    return (

        <div>
            <Input onSubmit={addList}/>
            <Todo lists={lists} completeList={completeList} removeList={removeList} />
        </div>

       
    )


}
export default List;