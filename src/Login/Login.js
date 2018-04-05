import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldTouched: false,
            email: '',
            password: '',
            error: ''
        };
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value, fieldTouched:true })
    };

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value, fieldTouched: true })
    };

    getValidationState = () => {
        const { fieldTouched, email, password } = this.state;

        if (!fieldTouched) { return; }

        if (email.trim() && password.trim()) {
            return 'success';
        }
        return 'error';
    };

    authSocial = () => {
        this.props.auth.authSocial();
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.auth.submitLogin(this.state, (error) => {
            this.setState({ error: error.description });
        });
    };

    render = () => {
        return (
            <Form horizontal onSubmit={this.onSubmit} className='col-xs-6'>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button onClick={this.authSocial}>Sign in with your Google account</Button>
                    </Col>
                </FormGroup>
                <FormGroup controlId="email" validationState={this.getValidationState()}>
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="xxx@xxx.xxx" onChange={this.onEmailChange} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="password" validationState={this.getValidationState()}>
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" onChange={this.onPasswordChange} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <span className="text-danger">{this.state.error}</span>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export { Login };