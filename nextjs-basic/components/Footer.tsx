import React from "react"
import { BasicProps } from "../models/BasicProps"

export const Footer = ({footerContent}:BasicProps) => {
    return (
        <div>
            <p>
                &copy; {footerContent?.year} {footerContent?.company}
            </p>
        </div>
    )
}