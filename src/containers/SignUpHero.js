import React from 'react'

import { connect } from 'react-redux'
import { signUp } from '../actions'
import SignUp from "../components/SignUp";

const SignUpHero = ({ dispatch }) => {

    return (
        <div className="main">
            <SignUp onSignUp={signUp()}/>
        </div>
    )
}

export default connect()(SignUpHero)