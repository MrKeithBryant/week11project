import React from 'react';

export default class BaseLayout extends React.Component {

  constructor (props) {
      super(props);
      this.state = {};
  }
  render () {

      return (

        <div className='base'>
        
        {this.props.children}


        </div>

    )
  }
}
