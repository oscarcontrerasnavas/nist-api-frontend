function Header({title}) {
  return (
    <header className="mb-4">
        <h1>
        <span className="d-block">
            NIST API
            <small className='fs-6 text-black-50 text-capitalize'>{title && " / " + title}</small>
        </span>
        <small className='d-block'>Unofficial<sup>*</sup></small>
        </h1>
      </header>
  )
}

export default Header