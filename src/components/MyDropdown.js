import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

export const MyDropdown = ({ onChange, currencies, placeholder, type  }) => (
  <Select
    showSearch
    style={{ minWidth: '20vw', marginTop: '1%' }}
    placeholder={placeholder}
    optionFilterProp="children"
    onChange={(value) => onChange(type, value)}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {
      currencies.map((currency, key) => (
        <Option 
          key={key} 
          value={currency.value}>{currency.name ? `${currency.name} - ${currency.value}` : currency.value}
        </Option>
      ))
    }
  </Select>
)
