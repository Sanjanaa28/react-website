// App.js

import React from "react";
import "./App.css";
import backgroundImage from "https://tse1.mm.bing.net/th?id=OIP.H_H--SsK8bBZk6X7H4KW0AHaFR&pid=Api&P=0&h=180";

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

export default App;
