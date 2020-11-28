import React from 'react'

import Text from './Text'
import './styles/index.sass'


class App extends React.Component {
  state = {
    timesClicked: 0,
    inputString: ""
    // timesClicked: 5,
    // inputString: "45+"
  }

  inputRef = React.createRef()

  render = () =>
    <div className="App">
      <div
        className="gradient-line"
        onClick={() => this.setState({ timesClicked: this.state.timesClicked + 1 })}
      >
        {this.state.timesClicked >= 5 &&
          <input
            ref={this.inputRef}
            className="form__input"
            onChange={e => {
              this.setState({ inputString: e.target.value })
              // e.target.value === "+" && this.inputRef.current && this.inputRef.current.blur()
            }}
          />}
      </div>

      {this.state.timesClicked >= 5 && this.state.inputString === "45+" &&
        <Text />}
    </div>
}


export default App