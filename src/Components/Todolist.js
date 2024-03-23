
import React, { useState } from "react";


function TodoList() {
  const [title, setitle] = useState("")
  const [maintask, setmaintask] = useState([])

  const SubmitHandler = (e) => {
    e.preventDefault()
    setmaintask([...maintask, { title }])
    setitle("")
  }

  const deletehandler = (i) => {
    let copytask = [...maintask]
    copytask.splice(i, 1)
    setmaintask(copytask)
  }

  const edithandler = (i) => {
    let copytask = [...maintask];
    const newTitle = prompt("Enter new title"); 
    if (newTitle !== null) { 
      copytask[i].title = newTitle;
      setmaintask(copytask);
    }
  };

  let rendertask = <h2 className="new2">No Task Available</h2>

  if(maintask.length>0){
  rendertask = maintask.map((t, i) => {
    return (
      <li key={i} className="addlist">
        <div>
          <h3 className="new3">{t.title}</h3>
        </div>
        <button className="new5" onClick={()=>{
          {edithandler(i)}
          }}>Edit</button>
        <button className="new4" onClick={()=>{
          {deletehandler(i)}
        }}>Delete</button>
      </li>
    )
  })
}


  return (
    <>
      <form onSubmit={SubmitHandler} className="form1">
        <input className="formlist"
          placeholder="Enter your Todo"
          type="Text"
          value={title}
          onChange={(e) => {
            setitle(e.target.value)
          }}
        ></input>
        <button className="Todobutton">+</button>
        
        <hr />
        <h2 className="new1" >TODO</h2>
        <div>
          <ul>
            {rendertask}
          </ul>
        </div>
      </form>

    </>
  )
}
export default TodoList;