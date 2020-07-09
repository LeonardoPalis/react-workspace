import React, { useEffect, useCallbact } from 'react';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';

export function Home() {

  const history = useHistory();

  const onClickUser = () => {
    alert("Você está sendo redirecionado...")
    history.push('/');
  }

  return (
    <div className="wrapper">
      <Button onClick={onClickUser} variant="contained" color="secondary">
        Usuário
      </Button>
      <Button variant="contained" color="secondary">
        Pagina 2
      </Button>
      <Button variant="contained" color="secondary">
        Pagina 3
      </Button>
    </div>
  )
}

export default Home;
