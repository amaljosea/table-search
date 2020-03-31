import React from 'react';

import Table from './components/Table'
import Search from './components/Search'

import './SearchTable.css'
export function SearchTable() {
  return (
    <div className="search-table">
      <Search />
      <Table />
    </div>
  );
}
