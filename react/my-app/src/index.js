import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var count=0;

function print(node){
  return (node.data.name+'('+(node.data.designation)+')');
}

function RenderTree(props) {
  if (props.data === null) {
    return null;
  }
  console.log(props.data)
  return (
    <ul className="box">
      <li className="node">
      <span className="data">{print(props.data)}</span>
        <RenderTree data={props.data.left} />
        <RenderTree data={props.data.right} />
      </li>
    </ul>
  );
}

class Hirarachy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch("http://172.19.31.24:4000")
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  render() {
    return <RenderTree data={this.state.data} />;
  }
}

ReactDOM.render(
  <Hirarachy/>,
  document.getElementById("root")
);
