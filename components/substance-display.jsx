import parse from 'html-react-parser';

function SubstanceDisplay({substance}) {
  const base_url = "https://nist-scrapyrt.herokuapp.com";

  if (substance) {

      return (
        <div className="row pt-4">
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
    
                <a href={
                  base_url +
                  `/crawl.json?spider_name=webbook_nist&start_requests=true&crawl_args={\"cas\":\"${substance.cas}\"}`
                  } className="btn btn-primary my-4" target='_blank' rel="noreferrer">
                    Full JSON response
                  </a>
            </div>
        </div>
      )
  }

  return (
    <div></div>
  )
}

export default SubstanceDisplay