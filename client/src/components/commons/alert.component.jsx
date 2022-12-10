import Alert from 'react-bootstrap/Alert';

function BasicAlert({mensagge, variant}) {
  return (
        <Alert key={variant} variant={variant}>
          {mensagge}
        </Alert>
  );
}

export default BasicAlert;