import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './searchSlice';
import styles from './Search.module.css';

import Table from './components/Table'
import Search from './components/Search'


export function SearchTable() {
  return (
    <div>
      <Search />
      <Table />
    </div>
  );
}
