import {combineReducers} from 'redux';
import {USER_SELECTED, ACCOUNT_SELECTED, WITHDRAW_FUNDS} from '../actions/index';
import userList from '../data/users';
import update from 'immutability-helper';

const initialState = {
    users: userList(),
    selectedUser: null,
    selectedAccount: null
};

const reducer = function(state = initialState, action) {
    switch (action.type) {
        case USER_SELECTED:

            return {
              ...state,
              selectedUser: state.users.find(user => user._id === action.payload)
            };
            case ACCOUNT_SELECTED:
              return update(state, {
                selectedAccount: {
                  $set: action.payload
                }
              });
              case WITHDRAW_FUNDS:
              const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
              const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount);

              return {
                ...state,
                  user: userIdx.map(user => user._id === state.selectedUser ? {
                    ...user,
                      account: user.account.map(account => account.id === state.selectedAccount ? {
                        ...account,
                          balance: account.balance - action.payload
                        } : account
                      )
                    } : user
                  )
                }
                  default:
                    return state;
                  }}



        /*

          You will need to correct a reducer case for ACCOUNT_SELECTED here - HINT: it should mimic closely the USER_SELECTED case.

        */

export default reducer;
