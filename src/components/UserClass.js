import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.props.name + "Constructor Child");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
  }

  render() {
    const { count } = this.state;
    console.log(this.props.name + "Render Child");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count {count}
        </button>
        <h1>
          {this.props.name} - {this.props.class}
        </h1>
      </div>
    );
  }
}

export default UserClass;
