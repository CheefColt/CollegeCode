import React from "react";

const SemContext = React.createContext();
const SubContext = React.createContext();
const SemNumberContext = React.createContext();
const SubNumberContext = React.createContext();

const SemContextProvider = SemContext.Provider;
const SubContextProvider = SubContext.Provider;
const SemNumberContextProvider = SemNumberContext.Provider;
const SubNumberContextProvider = SubNumberContext.Provider;

const SemContextConsumer = SemContext.Consumer;
const SubContextConsumer = SubContext.Consumer;
const SemNumberContextConsumer = SemNumberContext.Consumer;
const SubNumberContextConsumer = SubNumberContext.Consumer;


export { SemContextProvider, SubContextProvider, SemNumberContextProvider, SubNumberContextProvider,
            SemContextConsumer, SubContextConsumer, SemNumberContextConsumer, SubNumberContextConsumer}