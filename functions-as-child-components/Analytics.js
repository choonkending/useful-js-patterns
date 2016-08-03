class Analytics extends React.Component {
  componentDidMount() {
    // Do something
  }
  render() {
    return (
      <span>{this.props.children}</span>
    );
  }
}

class OuterClass extends React.Component {
  render() {
    return (
      <Analytics>
        <ActualComponentYouCareAbout />
      </Analytics>
    );
  }
}
