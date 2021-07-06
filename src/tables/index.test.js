import React from "react"
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import UserTable from "./UserTable";
import {BrowserRouter as Router } from "react-router-dom"

const setup = () => {

    const userlist = [
        { id: 1, name: 'Tania', username: 'floppydiskette', alamat: 'Tabanan', phone: '0878731' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon',alamat: 'Tabanan', phone: '08543534'},
		{ id: 3, name: 'Ben', username: 'benisphere', alamat: 'Tabanan', phone: '0897637'},
    ];

    const {container} = render(
        <Router>
             <UserTable users={userlist}/>
        </Router>
    )

    const usertable = container.querySelector(`.usertable`)

    return {
        usertable
    };

}


test("Should have <table> with className .breadcrumb and have text Tania and Craig", () => {
    const { usertable} = setup();


    expect(usertable).toBeInTheDocument();
    expect(usertable).toHaveTextContent("Tania");
    expect(usertable).toHaveTextContent("Craig");
})