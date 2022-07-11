import SubstanceCard from '../components/substance-card';

function Home({substances}) {
  return (
    <main className='container bg-white p-3 my-3'>
      <header>
        <h1>NIST API
        <small className='d-block fs-6'>Unofficial<sup>*</sup></small>
        </h1>
      </header>

      <p className='mt-4'>
        Thanks for visiting this unofficial effort to bring a programatic solution to the Nist Webbook website with its useful information
      </p>

      <div className='row'>
        <div className='col substances'>
          {substances.map((substance)=>(
            <SubstanceCard key={substance.cas} substance={substance} />
          ))}
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const axios = require('axios').default;
  const response = await axios.get("https://nist-scrapyrt.herokuapp.com/substances")
  const substances = await response.data.items

  return {
    props: {
      substances,
    },
  }
}

export default Home