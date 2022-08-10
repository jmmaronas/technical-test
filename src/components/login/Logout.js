import Button from 'react-bootstrap/Button'

export default function Logout( { handleLogout } ) {
  
  return (
    <>
      <Button onClick={handleLogout} variant="outline-danger">Logo Out</Button>{' '}
    </>
  );
}

