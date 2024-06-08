import React from "react"
import { BasicProps } from "../models/BasicProps"

export const Sidebar = ({menuItems}:BasicProps) => {
    return(
        <div>
            <ul>
                {menuItems?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}