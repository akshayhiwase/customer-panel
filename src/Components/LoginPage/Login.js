import React from 'react';
import classes from './Login.module.css';


class Login extends React.Component {

    onUserLogin = (e) => {
        e.preventDefault();
        const loginUser = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        console.log(loginUser)
        alert("Login Successful")
        const path = `account`;
        this.props.history.push(path);
    }

    render() {


        return (
            <div className={classes.loginSection}>
                <div className={classes.loginContaint}>
                    <div className={classes.infoTextDiv}>
                        <h3>Welcome to Dashboard, Login</h3>
                    </div>
                    <form action="" onSubmit={this.onUserLogin}>
                        <div className={classes.inputFieldSection}>
                            <label htmlFor="">Username</label>
                            <input type="text" name="username" />
                        </div>
                        <div className={classes.inputFieldSection}>
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" />
                        </div>
                        <div className={classes.inputFieldSection}>
                            <button className={classes.loginBtn}>Login</button>
                        </div>
                        <div className={classes.inputFieldSection}>
                            <button className={classes.loginBtn} onSubmit={this.onUserLogin}>Forgot Your Password?</button>
                        </div>
                    </form>

                </div>


            </div>
        )
    }
}

export default Login;