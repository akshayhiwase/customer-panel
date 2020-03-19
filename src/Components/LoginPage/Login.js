import React from 'react';
import classes from './Login.module.css';
import { GoogleLogin } from 'react-google-login';

class Login extends React.Component {
    state = {
        userInfo: {}
    }
    onUserLogin = (e) => {
        e.preventDefault();
        const loginUser = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        localStorage.setItem("userAdmin", JSON.stringify(loginUser))
        this.setState({
            userInfo: loginUser
        })
        console.log(loginUser)
        alert("Login Successful")
        const path = `account`;
        this.props.history.push(path);
    }

    render() {


        const responseGoogle = (response) => {
            console.log(response);
        }
        return (
            <div className={classes.loginSection}>
                <div className={classes.loginContaint}>
                    <div className={classes.infoTextDiv}>
                        <h3>Welcome to Dashboard, Login</h3>
                    </div>
                    <form action="" onSubmit={this.onUserLogin}>
                        <div className={classes.inputFieldSection}>
                            <label htmlFor="">Username</label>
                            <input type="email" name="username" required />
                        </div>
                        <div className={classes.inputFieldSection}>
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" required />
                        </div>
                        <div className={classes.inputFieldSection}>
                            <button className={classes.loginBtn}>Login</button>
                        </div>
                        <div className={classes.inputFieldSection}>
                            <button className={classes.loginBtn} onSubmit={this.onUserLogin}>Forgot Your Password?</button>
                        </div>
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />,
                    </form>

                </div>


            </div>
        )
    }
}

export default Login;