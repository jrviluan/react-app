import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { complete, edit, task } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={task } focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <span>{task}</span>
        <span>{icon}</span>
      </li>
    );
  }
}