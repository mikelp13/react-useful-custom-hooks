import React, { useState } from "react";
import axios from "axios";

//Hooks
// import useInput from "../hooks/useInput";
// import useDebounce from "../hooks/useDebounce";
import useRequest from "../hooks/useRequest";

//Components
// import Hover from "./Hover";
// import List from "./List";

//================= useInput example =================================================
// const App = () => {
//   const userName = useInput("");
//   const password = useInput("");

//   return (
//     <div>
//       <input {...userName} type="text" placeholder="username" />
//       <input {...password} type="text" placeholder="password" />
//       <button
//         type="button"
//         onClick={() => console.log(userName.value, password.value)}
//       >
//         Click
//       </button>
//     </div>
//   );
// };
//=================================================================================

//================= useHover example =================================================
// const App = () => <div><Hover/></div>
//=================================================================================

//================= useScroll example Infinite pagination=============================
// const App = () => <div><List/></div>
//=================================================================================

//================= useDebounce example =================================================
// const App = () => {
//   const [value, setvalue] = useState("");
//   const debouncedSearch = useDebounce(search, 500)

//   function search(query) {
//     fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
//       .then((response) => response.json())
//       .then((data) => console.log("data", data));
//   }

//   const handleChange = (e) => {
//     setvalue(e.target.value);
//     debouncedSearch(e.target.value)
//   };

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//     </div>
//   );
// };
//=================================================================================

//================= useRequest example ============================================

const App = () => {
  const [todos, loading, error] = useRequest(fetchTodos)

  function fetchTodos() {
      return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  if (loading) {
      return <h1>Loading...</h1>
  }

  if (error) {
      return <h1>Data loading error!</h1>
  }


  return (
      <div>
          {todos && todos.map(todo =>
              <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                  {todo.id}. {todo.title}
              </div>
          )}
      </div>
  );
}

export default App;
