
import { takeEvery, put } from 'redux-saga/effects';

import { ACTIVATION, SIGN_UP } from '../actionTypes/userActionTypes';

import { IUser } from '../types';

const signup = (userInfo: IUser) => ({
    type: SIGN_UP,
    userInfo,
});

const activation = (activationInfo: any, navigate: Function) => ({
    type: ACTIVATION,
    activationInfo,
    navigate,
});

// saledek848@lubde.com
// Duda_hello_test
function* fetchSignUp(action: any) {
    const { userInfo } = action;
        const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(userInfo),
        })
        const response: IUser = yield data.json();
        console.log(response);
}

function* activateUser(action: any) {
    const { activationInfo, navigate } = action;

    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(activationInfo),
    })
    if (data.status < 300) {
      navigate('/success')
    } else {
        console.log('Error')
    }
  }

function* watcherUser() {
    yield takeEvery(SIGN_UP, fetchSignUp);
    yield takeEvery(ACTIVATION, activateUser);
}

export {
    watcherUser,
    signup,
    activation,
}