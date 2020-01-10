import React, { Component } from 'react';
import { Button } from 'antd';
import { MyDropdown } from '../components/MyDropdown';
import { MyInputNumber } from '../components/MyInputNumber';

// curencies list
import currenciesList from '../utils/currenciesList';
import convertableCurList from '../utils/convertableCurList';

// services
import { convertCurrencyService } from '../services/currencyService';

export default class CurrencyConverter extends Component {
  state = {
    amount: 1,
    total: 0
  }

  onChange = (type, value) => {
    this.setState({ [type]: value });
  }

  onSubmit = () => {
    const { from, to, amount } = this.state;
    if (from && to) {
      convertCurrencyService('USD', 'PKR', amount).then(total => {
        this.setState({ total });
      }).catch(err => {
        console.log('ERROR :::', err);
      })
    } else {
      alert('Currency from & currency to are required');
    }
  }

  getDropDown = (currenciees, placeholder, type) => {
    return (
      <MyDropdown
        placeholder={placeholder}
        currencies={currenciees}
        onChange={this.onChange}
        type={type}
      />
    )
  }

  render() {
    return (
      <div className="App container column-flex">
        <div>
          <h2>CURRENCY CONVERTER ...</h2>
        </div>
        <div className="column-flex m-t5">
          <MyInputNumber min={1} onChange={this.onChange} type='amount' value={this.state.amount} />
          {this.getDropDown(convertableCurList, 'Select from', 'from')}
          {this.getDropDown(currenciesList, 'Select to', 'to')}
          <b> Converted Amount: {this.state.total} </b>
        </div>
        <div className="submit-button">
          <Button type="primary" block onClick={() => this.onSubmit()}>
            Convert
          </Button>
        </div>
      </div>
    )
  }
}
