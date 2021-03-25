import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Clock, { Toggle, ListExample, Blog, NameForm } from "./App";

const numbers = [1, 2, 3, 4, 5, 6];
const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];
ReactDOM.render(
  <>
    <Clock></Clock>
    <Toggle></Toggle>
    <ListExample numbers={numbers}></ListExample>
    <Blog posts={posts}></Blog>
    <NameForm></NameForm>
  </>,
  document.getElementById("root")
);
