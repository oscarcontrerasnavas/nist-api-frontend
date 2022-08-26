import Link from 'next/link'

function Header({title}) {
  return (
    <header>
      <Link href={'/substances/page/1'}>
      <a className='link-dark text-decoration-none'>
        <h1>
          <span className="d-block">
              NIST API
              <small className='fs-6 text-black-50 text-capitalize'>{title && " / " + title}</small>
          </span>
          <small className='d-block'>Unofficial<sup>*</sup></small>
        </h1>
      </a>
      </Link>
      </header>
  )
}

export default Header