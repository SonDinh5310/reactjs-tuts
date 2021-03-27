# React State

-   State là object chứa các property values thuộc về component đó

```jsx
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { brand: "Ford" };
    }
    render() {
        return (
            <div>
                <h1>My Car</h1>
            </div>
        );
    }
}
```

-   Khi State thay đồi thì component sẽ re-render

```jsx
    changeBrand() {
      this.setState({brand: "Honda"});
    }
```

# Function.prototype.bind()
