import React from "react";

// Main Component
class MyComponent extends React.Component {
    render() {
        return (
            <section>
                {this.props.children}
            </section>
        );
    }
}

// Subcomponents
class First extends React.Component {
    render() {
        return <p>FIRST</p>;
    }
}

class Second extends React.Component {
    render() {
        return <p>SECOND</p>;
    }
}

// Attach subcomponents to MyComponent
MyComponent.First = First;
MyComponent.Second = Second;

// Export default and named components
export default MyComponent;
export { First, Second };
