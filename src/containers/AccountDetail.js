import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from 'react-router-dom';
import { selectAccount, withdrawFunds } from '../actions/index';


class AccountDetails extends React.Component {
  constructor(props) {
    super(props);
      this.state = {account: "", user: {}}

  }
    render () {
    const {accountType, balance} = this.props.account;
    const {user} = this.props;
    return (
      <div className='accountdisplay'>
      <h2 className='accountType'>Account Type {accountType}</h2>
      <h4 className='balance'>Balance {balance}</h4>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    account: state.selectedAccount,
    user: state.selectedUser
  };
}

function mapDispatchToProps(dispatch) {
      return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}

function Transactions() {


}

export default connect(mapStateToProps,  mapDispatchToProps)(AccountDetails);

/*
  You will need to create a similar mapStateToProps as the one used in the AccountDetail component.


*/
