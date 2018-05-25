import React from 'react'
import Store from '../store/store'
import {navToCreateJob} from '../mutators/navMutators';

const Nav = () => (
    <div>
        <Store.Consumer>
            {() => (
                <button data-testid="createjobnav" onClick={navToCreateJob}>Create Job</button>
            )}
        </Store.Consumer>
    </div>
);

export default Nav;