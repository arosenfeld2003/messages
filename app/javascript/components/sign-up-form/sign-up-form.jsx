import React, {useState} from "react";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { connect } from "react-redux";
import {onSignUpRequest} from "../../redux/user/user-reducer";

const SignUpForm = (props) => {

    const {handleSignUpRequest} = props;
    const [userValues, setUserValues] = useState({});

    const handleChange = (evt) => {
        const { target } = evt;
        const { name, value } = target;
        setUserValues({ ...userValues, [name]: value });
    };
    
    const handleSignup = (evt) => {
        evt.preventDefault();
        handleSignUpRequest(userValues);
    }

    return <form method="" action="">
        <h2 className="h4 mb-4">Signup</h2>
        <FormInput
        id="email"
        name="email"
        className="form-control mb-4"
        placeholder="email"
        handleChange={handleChange}
        />
        <FormInput
        id="password"
        name="password"
        className="form-control mb-4"
        placeholder="password"
        handleChange={handleChange}
        />
        <FormInput
        id="password"
        name="password"
        className="form-control mb-4"
        placeholder="password"
        handleChange={handleChange}
        />
        <Button
        type="submit"
        className="btn btn-primary btn-block my-4 waves-effect waves-light"
        onClick={handleSignup}
        > Submit </Button>
    </form>
}

const mapDispatchToProps = (dispatch) => ({
    handleSignUpRequest: (userValues) => {
        dispatch(onSignUpRequest(userValues));
    }
})

export default connect(null, mapDispatchToProps)(SignUpForm);