"use client"

import {DataEditorContextType} from "@/presentation/context/DataEditorContextType";
import {FC, ReactNode, useState, createContext} from "react";

export const EditorDataContext = createContext<DataEditorContextType>({
    data: "",
    saveData: () => {
    },
    updateData: () => {
    },
});

export const DataEditorContextProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [data, setData] = useState<string>("");

    const saveData = (newData: string) => {
        setData(newData);
    };

    const updateData = (updatedData: string) => {
        setData(updatedData);
    };

    return (
        <EditorDataContext.Provider value={{data, saveData, updateData}}>
            {children}
        </EditorDataContext.Provider>
    );
}
