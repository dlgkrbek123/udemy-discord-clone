import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { getAlertActions } from '../store/actions/alertActions';

const AlertNotification = ({}) => {
  const { showAlertMessage, alertMessageContent } = useSelector(
    (state) => state.alert
  );

  const dispatch = useDispatch();

  return (
    showAlertMessage && (
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        open={showAlertMessage}
        autoHideDuration={6000}
        onClose={getAlertActions(dispatch).closeAlertMessage}
      >
        <Alert severity="info">{alertMessageContent}</Alert>
      </Snackbar>
    )
  );
};

export default AlertNotification;
