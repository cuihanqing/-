export const positions = (el) => {
    let parent = el
    const postionData = {
        top: 0,
        left: 0,
    }
    while (parent.offsetParent) {
        postionData.top += parent.offsetTop
        postionData.left += parent.offsetLeft
        parent = parent.offsetParent
    }
    return postionData
}