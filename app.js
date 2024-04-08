// app.js

import React from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <>
            <div className="container">
                <h1 className="title">Registration Form</h1>

                <form className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" placeholder="Enter your username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>

                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
