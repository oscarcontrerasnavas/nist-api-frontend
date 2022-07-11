function SubstanceCard({substance}) {
    const parse = require('html-react-parser');

    return (
        <div className="card border-0 my-4">
            <div className="card-body">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <img src={substance.image} alt="Img" className='img-fluid'/>
                        </div>
                        <div className="col-10">
                            <span className="fw-bold d-block">{substance.name[0].toUpperCase() + substance.name.substring(1)}</span>
                            <small className="d-block fw-bold text-black-50">{parse(substance.formula.replace(/[0-9]+/ig, "<sub>$&</sub>"))}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubstanceCard