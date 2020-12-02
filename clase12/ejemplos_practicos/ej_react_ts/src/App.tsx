import React from 'react';

interface AppProps {
  numero: number
}

interface AppState {
  mensaje: string
}

class App extends React.Component<AppProps, AppState> {

  state: AppState = {
    mensaje: 'Hola mundo'
  }

  render() {
    return (
      <div>
        {this.state.mensaje}
      </div>
    )
  }

}


export default App;
