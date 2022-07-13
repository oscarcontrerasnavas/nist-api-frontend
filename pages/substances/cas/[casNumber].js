import { getSubstance, getAllCasNumbers } from "../../../utils/substances"
import Header from "../../../components/header"
import SubstanceDisplay from "../../../components/substance-display"

export default function Substance({substance}) {
  return (
    <div className='container bg-white p-3 my-3'>

      <Header />
      <SubstanceDisplay substance={substance} />

    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getAllCasNumbers()

  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const substance = await getSubstance(params.casNumber)

  return {
    props: {
      substance,
    }
  }
}