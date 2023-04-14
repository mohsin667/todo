export const openDialogAction = () => {
    return {
        type:'OPEN_DIALOG',
        payload: true
    }
}
export const closeDialogAction = () => {
    return {
        type:'CLOSE_DIALOG',
        payload: false
    }
}