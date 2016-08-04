class DataExtractor extends React.Component {
  render() {
    const a = this.props.some.deeply.nested.data.a;
    const b = this.props.some.deeply.nested.data.b;
    return (
      <span>
        { this.props.children({a, b}) }
      </span>
    );
  }
}

const DumbComponent = ({a, b}) => <div>{a}{b}</div>;

class ComponentThatRendersDumbComponent extends React.Component {
  render() {
    <DataExtractor data={this.props.data}>
      <DumbComponent />
    </DataExtractor>
  }
}
