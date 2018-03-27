import React from 'react'
import PropTypes from 'prop-types'

const SignUp  = ({ onSignUp }) => {

    return (
        <div>
            <div className="focus">
                <p>Sign Up!</p>
                <input type="text" />
                <button onClick={onSignUp}>Submit</button>
            </div>
        </div>
    );
};

SignUp.propTypes = {
    onSignUp: PropTypes.func.isRequired
}

export default SignUp;