import axios from "axios";

export const login = ({ commit }, form) => {

    let json = JSON.parse(form.data)
    let emailSended = json.email

    return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:3001/checkUser', form.data)
            .then(response => {
                if (response.data == 'no valid') {
                    resolve(response.data)
                } else {
                    let id = response.data
                    commit('LOGIN', { emailSended, id })
                }
            }).catch((error) => {
                console.log(error)
            });
    })
}

export const logout = ({ commit }) => {
    commit('LOGOUT')
}

export const sendCategory = ({ commit }, form) => {
    axios.post('http://127.0.0.1:3001/expense-categories', form.data)
        .then(response => {
            alert('Catégorie créée')
        }).catch((error) => {
            console.log(error)
        });
}

export const sendExpense = ({ commit }, form) => {
    axios.post('http://127.0.0.1:3001/expenses', form.data)
        .then(response => {
            alert('Dépense créée')
        }).catch((error) => {
            console.log(error)
        });
}