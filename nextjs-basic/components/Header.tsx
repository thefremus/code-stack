import React from "react"
import { BasicProps } from "../models/BasicProps"

export const Header = ({headerTitle}: BasicProps) => {
    return (
        <h1>
        {headerTitle}
        </h1>
    )
}