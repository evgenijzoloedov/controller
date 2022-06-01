import React from 'react';
import './global.css'

import {Wrapper} from "./components/wrapper/Wrapper";
import {ViewedZone} from "./components/viewedZone/ViewedZone";
import {Controller} from "./components/controller/Controller";

export const App = () => {
    return (
        <Wrapper>
            <ViewedZone/>
            <Controller/>
        </Wrapper>
    );
};

