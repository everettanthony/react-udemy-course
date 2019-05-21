import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';
import Validation from '../../Validation/Validation';
import Aux from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log('Authenticated Context:', this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');

        return (
            <Aux>
                <div className={styles.person}>
                    { this.context.authenticated ? <p>Authenticated!</p> : <p>Login</p>}
                    {/* {this.context.authenticated ? (<p>Authenticated!</p>) : (<p>Please log in</p>)} */}
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age > 1 ? `${this.props.age} years` : `a ${this.props.age} year`} old.</p>
                    {this.props.children ? <p>{this.props.children}</p> : ''}
                    <input type="text" onChange={this.props.changed} value={this.props.name} ref={this.inputElementRef} />
                    <Validation inputLength={this.props.name.length} />
                </div>
                {this.props.nameList}
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;