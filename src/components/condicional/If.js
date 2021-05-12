
export default props => {
    if(props.test) {
        const elseChild = props.children.filter(child => {
            return child.type && child.type.name === 'Else'
        })[0]
        return props.children
    } else {
        return false
    }
}

export const Else = props => props.children
