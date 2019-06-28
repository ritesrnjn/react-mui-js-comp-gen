const {Button} = MaterialUI;

// Component
class ButtonComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: props.disabled ? props.disabled : true,
            count: 0
        };
    }

    updateButton = disabled => this.setState({disabled});

    handleClick = () => {
        let count = this.state.count+1;
        this.setState({count});
        this.props.onClick(count)
    };

    render() {
        const {disabled}= this.state;
        return (
            <Button variant="contained" color="primary" disabled={disabled} onClick={this.handleClick}>
                Click me!
            </Button>
        )
    }
}