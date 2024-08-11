const alertActions = {
  OPEN_ALERT_MESSAGE: 'ALERT.OPEN_ALERT_MESSAGE',
  CLOSE_ALERT_MESSAGE: 'ALERT.CLOSE_ALERT_MESSAGE ',
};

export const getAlertActions = (dispatch) => {
  return {
    openAlertMessage: (content) => {
      dispatch(openAlertMessage(content));
    },
    closeAlertMessage: () => {
      dispatch(closeAlertMessage());
    },
  };
};

const openAlertMessage = (content) => ({
  type: alertActions.OPEN_ALERT_MESSAGE,
  content,
});

const closeAlertMessage = () => ({
  type: alertActions.CLOSE_ALERT_MESSAGE,
});

export default alertActions;
