
export const SwitchComponents = ({ active, children }) => {
    return (
        children.filter(child => child.props.name === active)
    )
}
