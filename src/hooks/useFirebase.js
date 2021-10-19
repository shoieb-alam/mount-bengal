import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../Page/Home/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // google signin 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError("Popup closed / blocked by the user");
                setMessage();
            })
            .finally(() => setIsLoading(false));
    }

    // observing user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // logout function 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setMessage();
                setError();
            })

            .finally(() => setIsLoading(false));
    }

    // email-password registration 
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must at least 6 characters long');
            setMessage();
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }


    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setMessage('Login Successful');
            })
            .catch(error => {
                setError('Incorrect username / password !');
                setMessage();
            })
    }


    // new user registration 
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError("Account already exists !");
                setMessage();
            })
    }

    const handleNameChange = e => {
        setName(e.target.value);
        setMessage();
        setError();
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
        setMessage();
        setError();
    }
    const handlePassChange = e => {
        setPassword(e.target.value);
        setMessage();
        setError();
    }


    const toggleLogin = e => {
        setIsLogin(e.target.checked);
        setMessage();
        setError();
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                setMessage('Password reset link sent to e-mail');
                setError();
            })
            .catch(error => {
                setError("Enter e-mail and password first !");
                setMessage();
            })
    }

    return {
        user,
        isLoading,
        isLogin,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handlePassChange,
        toggleLogin,
        handleResetPassword,
        error,
        message
    }
}

export default useFirebase;