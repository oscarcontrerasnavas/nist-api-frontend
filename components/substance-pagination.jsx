import Link from 'next/link'

function SubstancePagination({totalPages, currentPage}) {
  let url_base = "/substances/page/"
  // create array from 1 to totalPages
  let i = 0
  let pages = Array(totalPages)
  while (i < totalPages) pages[i++]=i;

  let pagesToPrint = pages.slice(currentPage-1, currentPage+4)

  return (
    <nav aria-label="Pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link href={url_base + (currentPage - 1)}>
            <a className={"page-link" + (currentPage==0 ? "disabled" : "")} aria-label="First">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </Link>
        </li>

        {pagesToPrint.map((page)=>{
          return (
            <li key={page} className={"page-item" + ((page==currentPage) ? " active" : "")}>
              <Link href={url_base + page}>
                <a className="page-link">{page}</a>
              </Link>
            </li>
          )
        })}

        <li className="page-item disabled">
            <a className="page-link">...</a>
        </li>
        <li className="page-item">
          <Link href={url_base + totalPages}>
            <a className="page-link">{totalPages}</a>
          </Link>
        </li>
        <li className="page-item">
          <Link href={url_base + (currentPage+1)}>
            <a className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SubstancePagination