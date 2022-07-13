import Link from 'next/link'
import Header from '../components/header'

function Home() {
  return (
    <main className='container bg-white p-3 my-3'>
      
      <Header/>

      <p className='mt-4'>
        Thanks for visiting this unofficial effort to bring a programatic solution to the Nist Webbook website with its useful information
      </p>

      <Link href="/substances/page/1">
        <a className='btn btn-lg btn-success'>List of common substances</a>
      </Link>

    </main>
  )
}

export default Home