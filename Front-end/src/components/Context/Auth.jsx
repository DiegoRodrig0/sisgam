import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const login = (email, password) => {
        console.log("Login Auth", { email, password });

        const loggedUser = {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if (password === "12345") {
            setUser(loggedUser);
            navigate("/");
            console.log("Login realizado com sucesso")
        }
        else {
            console.log("Login ou senha inválido")
        }
    };

    const logout = () => {
        console.log("Logout");
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
