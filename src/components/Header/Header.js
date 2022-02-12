import React from 'react';

const Header = () => (
  <header>
    {page > 1
        ? <button type="button" onClick={() => setPage(page - 1)}>Previous page</button>
        : ''}
      <button type="button" onClick={() => setPage(page + 1)}>Next page</button>
  </header>
);
export default Header;
