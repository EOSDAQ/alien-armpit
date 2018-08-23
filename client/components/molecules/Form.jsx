import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: this.onSubmit.bind(this),
      values: props.initialValues || {},
      setValues: this.setValues.bind(this),
      onChange: this.onChange.bind(this),
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { values } = this.state;
    this.props.onSubmit(values);
  }

  setValues(values) {
    this.setState({
      values: {
        ...this.state.values,
        ...values,
      },
    });
  }

  onChange(e) {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  }

  render() {
    return (
      <form
        ref={e => this.form = e}
        onSubmit={(e) => this.onSubmit(e)}
      >
        {this.props.children(this.state)}
      </form>
    );
  }
}

export default Form;
