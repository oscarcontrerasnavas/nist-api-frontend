import { getAllPages, getPage } from '../../../utils/substances';
import Header from '../../../components/header';
import SubstanceList from '../../../components/substance-list';
import SubstancePagination from '../../../components/substance-pagination';

function List({
    currentPage,
    totalPages,
    itemsPerPage,
    itemsInPage,
    totalItems,
    substances,
}) {
  return (
    <div className='container bg-white p-3 my-3'>

      <Header title="Substances" />
      <SubstanceList substances={substances} />
      <SubstancePagination totalPages={totalPages} currentPage={currentPage}/>

    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPages()
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const props = await getPage(params.pageNumber)
  return {
    props: props
  }
}

export default List