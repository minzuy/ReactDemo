
const enabled = false;
const text = "Button";
const size = 50;
const placeHolder = "Input here ....";

const App = ()=> {
    return(
        <section>
            <button disabled = {enabled}>{text}</button>
            <input placeholder="{placeHolder}"size={size}></input>
        </section>
    );
}

export default App;
