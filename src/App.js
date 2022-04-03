import React from "react";
// import HookCounter from "./Components/HookCounter";
// import DataFetching from "./Components/DataFetching";
import ComponentA from "./ContextComponent/ComponentA";

export const UserContext = React.createContext()
export const ChannnelContext = React.createContext()

export default function App() {
    return (
        <div>
            {/* <HookCounter/> */}
            {/* <DataFetching/> */}
            <UserContext.Provider value="Rajeev">
                <ChannnelContext.Provider value="Codevolution">
                    <ComponentA />
                </ChannnelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}