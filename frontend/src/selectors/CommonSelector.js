import { createSelector } from 'reselect';

const commonSelector = state => state.common;

const getAlertMessage = () => createSelector(
    commonSelector,
    common => common.alertMessage
)

const getAlertMessageFlag = () => createSelector(
    commonSelector,
    common => common.alertMessageFlag
)

const isLoading = (...actionsToCheck) => createSelector(
    commonSelector,
    common => common.loader.actions.some(action => actionsToCheck.includes(action.name))
)

export const CommonSelector = {
    getAlertMessage,
    getAlertMessageFlag,
    isLoading,
};
