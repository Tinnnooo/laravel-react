import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    surveys: [],
    questionTypes: [],
    toast: {
        message: null,
        show: false,
    },
    setCurrentUser: () => {},
    setUserToken: () => {},
})

export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userToken, setUserToken] = useState(localStorage.getItem('TOKEN') || '');
    const [surveys, setSurveys] = useState([]);
    const [questionTypes] = useState(['text', 'select', 'radio', 'checkbox', 'textarea']);
    const [toast, setToast] = useState({message:'', show: false});

    const showToast = (message) => {
        setToast({message, show: true});
        setTimeout(() => {
            setToast({message: '', show:false});
        }, 5000)
    };

    const setToken = (token) => {
        if(token){
            localStorage.setItem('TOKEN', token);
        } else {
            localStorage.removeItem('TOKEN');
        }
        setUserToken(token);
    }

    return (
        <StateContext.Provider value={{ 
            currentUser,
            setCurrentUser,
            userToken,
            setToken,
            surveys,
            questionTypes,
            toast,
            showToast,
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);