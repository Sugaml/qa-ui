import { LOGIN_DATA } from '../Constants/account';

const loginResponse=(data)=>({
    type: LOGIN_DATA,
    payload:data,
})

export {
    loginResponse,
};
