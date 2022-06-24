const axios = require('axios').default;

function Home({substances}) {
  return (
    <ul>
      <li>Substances</li>
      {substances.map((substance)=>(
        <li key={substance.cas}>{substance.name}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const response = await axios.get("https://nist-scrapyrt.herokuapp.com/substances")
  const substances = await response.data.items

  return {
    props: {
      substances,
    },
  }
}

export default Home