function crateAnalytics() {
    let counter = 0
    let destoyed = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            destoyed = true
        },

        getClicks() {
            if (destoyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window.analytics = crateAnalytics()