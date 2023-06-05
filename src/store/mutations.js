export const LOGIN = (state, data) => {
    state.email = data.emailSended
    state.id = data.id
    location.reload()
}

export const LOGOUT = (state) => {
    state.email = null
    state.id = null
    location.reload()
}