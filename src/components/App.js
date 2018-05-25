import React from 'react';
import Store from '../store/store';
import ViewContainer from './ViewContainer';
import Nav from './Nav';

const App = () => (
    <Store.Provider>
        <div>
            <Nav/>
            <ViewContainer />
        </div>
    </Store.Provider>
);

export default App;