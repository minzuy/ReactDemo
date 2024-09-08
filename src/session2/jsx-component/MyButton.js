import React from "react";
class MyButton extends React.Component {
    render() {
        return <button>{this.props.child}</button>;
    }
}
export default MyButton;