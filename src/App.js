import "./App.css";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./components/AddTodo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { About } from "./components/About";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I will be deleted", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    // console.log("adding new todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // {
  //   sno : 1,
  //   title: "Market",
  //   desc: "go to sabji market"
  // },
  // {
  //   sno : 2,
  //   title: "gym",
  //   desc: "go to gym"
  // },
  // {
  //   sno : 3,
  //   title: "Basketball",
  //   desc: "go to play basketball"
  // },
  // {
  //   sno : 4,
  //   title: "tuition",
  //   desc: "go to tuition"
  // },
  // ]);
  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route
            exact path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              )
            }}
          >
          </Route>
          <Route path="/about">
              <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
