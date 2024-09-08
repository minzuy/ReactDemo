import React from "react";
class MySection extends React.Component {
    render() {
        return (
            <section>
                <h1>My MyComponent</h1>
                {this.props.children}
            </section>
        )
    }
}
export default MySection;