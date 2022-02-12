import React from 'react';
import Cards from './Cards/Cards';
import Filters from './Filters/Filters';

const Body = () => (
  <>
    <h1 className="text-center ubuntu my-4">
      Rick & Morty
      <span className="text-primary"> WiKi</span>
    </h1>
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Filters />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Body;
