// mapActions.js
export const setSelectedRegion = (region) => ({
    type: 'SET_SELECTED_REGION',
    payload: region,
});

export const toggleNightMode = () => ({
    type: 'TOGGLE_NIGHT_MODE',
});
