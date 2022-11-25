import axios from "axios";
import {setToLocalStorage} from "../../utilits/utilits";
import {setLoginAction, setUserAction} from "../actions/UserActions";

export const getUser = (requestType, getError, email, password, name) => {
    let url = `http://localhost:3001/user/${requestType}?email=${email}&password=${password}&name=${name}`
    if (requestType === 'login') {
        url = `http://localhost:3001/user/${requestType}?email=${email}&password=${password}`
    }
    return async dispatch => {
        try {
            const request = await axios.get(url)
            const res = await request
            getError('')
            setToLocalStorage('user', res.data.message.user)
            dispatch(setUserAction(res.data.message.user))
            dispatch(setLoginAction(true))
        } catch (e) {
            getError(e.response.data.message)
        }
    }
}