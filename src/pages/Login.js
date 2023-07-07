import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {

    let navigate = useNavigate();

    const signWithGoogle = () => {
        signInWithPopup(auth, provider).then((res) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/pagina-inicial");
        })
    }

    return (
        <div className="loginPage">
            <p>Acesse com a sua conta google para continuar</p>
            <button className="login-with-google-btn" onClick={signWithGoogle}>Acesse com Google</button>
        </div>
    )
}

export default Login;