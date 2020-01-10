import React from 'react';
import { InputNumber } from 'antd';

export const MyInputNumber = ({ min, onChange, type, value }) => (
  <InputNumber min={min} defaultValue={value} onChange={(value) => onChange(type, value)} className="minWidthFields"/>
)
