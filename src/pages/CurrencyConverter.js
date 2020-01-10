import React, { Component } from 'react';
import { Button } from 'antd';

// services
import { convertCurrencyService } from '../services/currencyService';

export default class CurrencyConverter extends Component {
  state = {
    amount: 1,
    total: 0
  }

  onSubmit = () => {
    const { amount } = this.state;

    convertCurrencyService('USD', 'PKR', amount).then(total => {
      this.setState({ total });
    }).catch(err => {
      console.log('ERROR :::', err);
    })
  }

  render() {
    return (
      <div>
        CURRENCY CONVERTER
        total: {this.state.total}
        <Button type="primary" block onClick={() => this.onSubmit()}>
          Convert
        </Button>
      </div>
    )
  }
}
