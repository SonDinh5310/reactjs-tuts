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

-   bind() cho phép chúng ta dễ dàng thiết lập một đối tượng cụ thể sẽ bị ràng buộc này khi một chức năng hoặc phương pháp được gọi.
-   Các tác dụng của bind:

    -   Cho phép set giá trị của biến "this"

    ```jsx
    //Global x not exist so it's undefined
    const module = {
        x: 42, // this is local x
        getX: function () {
            return this.x;
        },
    };

    const unboundGetX = module.getX;
    console.log(unboundGetX()); // The function gets invoked at the global scope
    // expected output: undefined

    const boundGetX = unboundGetX.bind(module); // this will call the local x
    console.log(boundGetX());
    // expected output: 42
    ```

    -   Cho phép tạo 1 curry function (Tức là ta có thể tao ra một function mới từ function cũ bằng cách gắn mặc định một tham số cho function cũ đó)

    ```jsx
    function log(level, time, msg){
        console.log(level + “-” + time +”:” + msg);
    }

    function logAccessToday(msg){
        log(“Access”, “Today”, msg);
    }

    var  logAccessToday = log.bind(“Access”, “Today”, msg);

    logAccessToday("Sever Access");
    ```
