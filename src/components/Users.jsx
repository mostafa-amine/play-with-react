import { useState } from "react";

function Users() {

    // Stagiaire states
    const [matricule, setMatricule] = useState(0)
    const [Nom, setNom] = useState("")
    const [Prenom, setPrenom] = useState("")
    const [Filiere, setFiliere] = useState("")


    // Set Stagiaire
    const [Stagiaire, setStagiaire] = useState([])

    // Ajouter Stagiaires
    const Ajouter = function (e) {
        e.preventDefault()

        const nStagiaire = {
            matricule: matricule,
            nom: Nom,
            prenom: Prenom,
            filiere: Filiere
        };

        setStagiaire([...Stagiaire, nStagiaire])

        setMatricule(0);
        setNom("");
        setPrenom("");
        setFiliere("");

    }

    const supprimerStagiaire = function (matricule) {
        const Stg = [...Stagiaire]
        const filterStagiaire = Stg.filter(function (stagiaire) {
            return stagiaire.matricule !== matricule
        })
        console.log(filterStagiaire)
        setStagiaire(filterStagiaire)
    }


    return (
        <div className="App container border-1">

            <div className="ajouter">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ajouter
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Ajouter un stagiaire</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={Ajouter}>
                                    <div className="mb-3 d-flex justify-content-between">
                                        <div className="col-6 me-2">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Matricule</label>
                                            <input value={matricule} onChange={(event) => setMatricule(event.target.value)} type="number" className="form-control" />
                                        </div>

                                        <div className="col-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                                            <input value={Nom} onChange={(event) => setNom(event.target.value)} type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="mb-3 d-flex justify-content-between">
                                        <div className="col-6 me-2">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Prénom</label>
                                            <input value={Prenom} onChange={(event) => setPrenom(event.target.value)} type="text" className="form-control" />
                                        </div >

                                        <div className="col-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Filière</label>
                                            <input value={Filiere} onChange={(event) => setFiliere(event.target.value)} type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-success">Ajouter</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <table className="table table-hover mt-5">
                <thead>
                    <tr>
                        <th scope="col">Matricule</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Filière</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Stagiaire.map((Stagiaire, index) => (
                            < tr key={index}>
                                <td>{Stagiaire.matricule}</td>
                                <td>{Stagiaire.nom}</td>
                                <td>{Stagiaire.prenom}</td>
                                <td>{Stagiaire.filiere}</td>
                                <td><button className="btn btn-danger" onClick={() => supprimerStagiaire(Stagiaire.matricule)}>Supprimer</button></td>
                            </tr>
                        ))

                    }

                </tbody>
            </table>
        </div >
    )
}

export default Users;
