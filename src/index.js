import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Clock, {
  Toggle,
  ListExample,
  Blog,
  NameForm,
  Reservation,
  Calculator,
  WelcomeDialog,
  App,
  SignUpDialog,
} from "./App";
import FilterableProductTable from "./ThinkingInReact";

const numbers = [1, 2, 3, 4, 5, 6];
const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  {
    id: 2,
    title: "Installation",
    content: "You can install React from npm.",
  },
];
const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
  },
];

// ReactDOM.render(
//   <>
//     <Clock></Clock>
//     <Toggle></Toggle>
//     <ListExample numbers={numbers}></ListExample>
//     <Blog posts={posts}></Blog>
//     <NameForm></NameForm>
//     <Reservation />
//     <br />
//     <Calculator />
//     <br />
//     <WelcomeDialog />
//     <br />
//     <App></App>
//     <br />
//     <SignUpDialog></SignUpDialog>
//   </>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS}></FilterableProductTable>,
  document.getElementById("container")
);
