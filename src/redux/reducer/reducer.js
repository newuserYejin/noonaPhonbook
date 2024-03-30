let initialState = {
    contactList: []
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case "ADD_contact":
            return { ...state, contactList: [...state.contactList, { name: payload.name, phoneNumber: payload.phoneNumber }] }
        case "ContactSearch":
            return { ...state, searchName: payload.searchName }
        default:
            return { ...state }
    }

}

export default reducer;