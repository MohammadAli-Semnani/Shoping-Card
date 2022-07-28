const shorten = title => {
    const splitedTitle = title.split(' ')
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    return newTitle
}

const isInCard = (state, id) => {
    return (!!state.selectedItem.find(item => item.id === id) )
}

const countQuantity = (state,id) => {
    const index = state.selectedItem.findIndex(item => item.id === id)
    if (index === -1) {
        return false
    } else {
        return state.selectedItem[index].quantity;
    }
}
export { shorten, isInCard, countQuantity }; 