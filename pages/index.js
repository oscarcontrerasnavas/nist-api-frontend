import Link from 'next/link'
import Header from '../components/header'

function Home() {
  return (
    <main className='container bg-white p-3 my-3'>
      
      <Header/>

      <p className='mt-4'>
        Thanks for visiting this unofficial effort to bring a programatic solution to the
         Nist Webbook website with some of  its useful information. For more information 
         about the API behind, follow <a target='_blank' rel="noreferrer" 
          href='https://github.com/oscarcontrerasnavas/nist-webbook-scrapyrt-spider'>
            nist-webbook-scrapyrt-spider
         </a> on <strong>Github</strong>
      </p>

      <Link href="/substances/page/1">
        <a className='btn btn-lg btn-success'>List of common substances</a>
      </Link>

    </main>
  )
}

export default Home