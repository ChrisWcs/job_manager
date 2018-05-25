import React from 'react';
import Store from '../store/store';
import CreateJob from './CreateJob';
import ManageJobs from './ManageJobs';

const ViewContainer = () => (
    <Store.Consumer>
        { state => (
            <div>
                {state.view}
            </div>
        )};
    </Store.Consumer>
);

export default ViewContainer;
