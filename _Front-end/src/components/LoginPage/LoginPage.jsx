import { useState, useContext } from 'react';
import { AuthContext } from '../Context/Auth';
import './LoginPage.css';

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Interceptado!");
        console.log("Input Form:", { email, password });
        login(email, password);
    };

    return (
        <div id="login">
            <form className="form" onSubmit={handleSubmit}>
                <br /><br />
                <p> <img src="/emserf-logo.png" width={240} /></p>
                <div className="field">
                    <br />
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <div className="field">
                        <br></br>
                        <label htmlFor='password'>Senha</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <div className='actions'>
                            <br /><br />
                            <button type="submit">Acessar</button>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
}

export default LoginPage;