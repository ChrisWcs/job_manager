import Store from '../store/store';

const createMutator = Store.createMutator;

const setView = (page) => createMutator( draft => {
    draft.view = page;
});

export const navToCreateJob = setView("createjob");

export const navToManageJob = setView("managejob");