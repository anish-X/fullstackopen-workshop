const react = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(react);

const sayHello = (props) => {
    return React.createElement(
        "p",
        {class:"name"},
        `Hello ${props.name}`
    )
}

const App = () => {
    const div = React.createElement(
        "div", {}, [
            React.createElement("h1",{class:"heading"}, "New Heading"),
            React.createElement(sayHello, {name: "Muna Bhai"}),

        ]
    )

    return div;
}
reactRoot.render(React.createElement(App));