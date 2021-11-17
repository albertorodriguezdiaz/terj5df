import React, {useState} from 'react';

function App() {


  const [ invitado, guadarInvitado] = useState({});

  const [ invitados, guardarInvitados] = useState([]);


  const handleChange = e => {
    guadarInvitado({
        ...invitado,
        [e.target.name] : e.target.value
    })
  }

  const agregarInvitado = (e) =>{
    e.preventDefault();
    guardarInvitados([...invitados, invitado]);
  }

  const nombre = 'first-name'; 
  const apellido = 'last-name'; 

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form
              onSubmit={agregarInvitado}
            >
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" 
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name"
                  onChange={handleChange}
                 />
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
                  { 
                    invitados.map((list)=>
                      <tr>
                        <td>{list[nombre]}</td>
                        <td>{list[apellido]}</td>
                      </tr>
                    )
                  }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}

export default App;


