import parse from 'html-react-parser';

function SubstanceDisplay({substance}) {
  return (
    <div className="row">
        <div className="col-12">
            <h2 className="text-capitalize text-center">{substance.name}</h2>
            <div className="fw-bold text-primary text-center">
                {parse(substance.formula.replace(/[0-9]+/ig, "<sub>$&</sub>"))}
            </div>
        </div>
        <div className="col-12 text-center my-4">
            <img src={substance.image} alt="Structure" className="img-fluid" />
        </div>
        <div className="col-12">
            <table className="table table-light">
                <tbody>
                    <tr>
                        <th scope='row'>
                            CAS
                        </th>
                        <td>
                            {substance.cas}
                        </td>
                    </tr>

                    <tr>
                        <th scope='row'>
                            Molecular weight
                        </th>
                        <td>
                            {substance.molecular_weight}
                        </td>
                    </tr>

                    <tr>
                        <th scope='row'>
                            IUPAC Standard InChI
                        </th>
                        <td>
                            {substance.iupac_std_inchi}
                        </td>
                    </tr>

                    <tr>
                        <th scope='row'>
                            IUPAC Standard InChIKey
                        </th>
                        <td>
                            {substance.iupac_std_inchikey}
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3 className='h6 mt-4 text-primary'>Gas phase data</h3>

            <table className="table table-light">
                <thead>
                    <tr>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Value</th>
                        <th scope='col'>Units</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <th scope='row'>
                            &Delta;<sub>f</sub>H<sup>º</sup><sub>gas</sub>
                        </th>
                        <td>
                            {substance.enthalpy_formation_gas.value}
                        </td>
                        <td>
                            {substance.enthalpy_formation_gas.units}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default SubstanceDisplay