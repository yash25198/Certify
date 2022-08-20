import React from 'react'

export const Certs = ({ certs }) => {

    console.log('users length:::', certs.length)
    if (certs.length === 0) return null

    const UserRow = (cert, index) => {

        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{index + 1}</td>
                <td>{cert.hash}</td>
            </tr>
        )
    }

    const certTable = certs.map((cert, index) => UserRow(cert, index))

    return (
        <div className="container">
            <div className="row">
                <div className="form-group col-md-12">
                    <h2 style={{marginLeft:"15px"}}> Certificates</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Hash</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certTable}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}