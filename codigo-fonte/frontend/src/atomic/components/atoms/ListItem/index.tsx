interface ListItemProps {
    children: string
}
export const ListItem = ({children}: ListItemProps) => {
    return (
        <li>
            {children}
        </li>
    )
}