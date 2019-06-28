const {Button} = MaterialUI;

// Component
class ButtonComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name ? props.name : '',
            count: 0
        };
    }

    updateName = name => this.setState({name});

    handleClick = () => {
        this.setState({count: this.state.count+1})
    };

    render() {
        const {name, count}= this.state;
        return (
            <Button variant="contained" color="primary" onClick={this.handleClick}>
                {name} {count}
            </Button>
        )
    }
}