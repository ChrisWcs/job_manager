import React from 'react';
import {render, Simulate} from 'react-testing-library'

import App from './App';

describe("Test for navigation", () => {
    const {getByText, getByTestId} = render(<App/>)

    it("App renders with Manage Jobs screen up", () => {
        expect(getByTestId('managejobs').textContent).toEqual("Manage Jobs")
    })

    it("User can hit Create Job button to change screen", () => {
        Simulate()
        expect(getByTestId('createjob').textContent).toEqual("Create a Job")
    })
})