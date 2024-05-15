import { AppProps } from "./App";

export const Footer = ({footerContent}:AppProps) => {
    return (
        <div>
            <p>
                &copy; {footerContent?.year} {footerContent?.company}
            </p>
        </div>
    )
}