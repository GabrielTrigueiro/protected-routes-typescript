import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const AuthStatus = () => {
    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    if (!auth.user) {
        return <p>You are not logged in.</p>;
    }
    
    return (
        <p>
            Welcome {auth.user}!{" "}
            <button onClick={() => {auth.signout(() => navigate("/"))}}>
                Sign out
            </button>
        </p>
    )
}
