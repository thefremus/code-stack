import { AppProps } from "./App"

export const Sidebar = ({menuItems}:AppProps) => {
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