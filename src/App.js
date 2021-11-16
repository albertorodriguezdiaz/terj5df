import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      newName: '',
      newLastName:''
    }
  }
  nameChange(e){
    this.setState({
      newName: e.target.value
    })
  }
  lastNameChange(e){
    this.setState({
      newLastName: e.target.value
    })
  }
  enterHandle(e){
    e.preventDefault();
    this.setState( prevState => ({
      list: [...prevState.list, {id: this.state.list.length+1, name: this.state.newName, lastname: this.state.newLastName}],
      newName: '',
      newLastName: ''
    }))
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.enterHandle.bind(this)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.newName} onChange={this.nameChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.newLastName} onChange={this.lastNameChange.bind(this)}/>
              </div>
              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>
            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
              {this.state.list.map( (guest, index) =>
                <tr key={index}>
                  <td>{guest.name}</td>
                  <td>{guest.lastname}</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App;