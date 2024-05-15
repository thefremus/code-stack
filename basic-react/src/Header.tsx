import { AppProps } from "./App";

export const Header = ({headerTitle}: AppProps) => {
    return (
        <h1>
        {headerTitle}
        </h1>
    )
}