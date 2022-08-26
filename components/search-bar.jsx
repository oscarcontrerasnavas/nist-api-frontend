import React from 'react'
import { useRouter } from 'next/router'

const SearchBar = () => {
  const router = useRouter()

  const handleSubmit = (e)=> {
    e.preventDefault();
    let cas = e.target.search.value;
    if (cas != "") {
      cas = cas.trim();
      cas = cas.split("-").join("");
      try {
        // Check if cas can be parsed as number.
        cas = parseInt(cas, 10)
        router.push("/substances/cas/"+cas.toString())
      } 
      catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <div className='sticky-top pt-4 pb-1 bg-white'>
      <form className="form-floating" onSubmit={handleSubmit}>
        <input type="text" name="search" id="search" 
          className="form-control form-control-sm" 
          placeholder='Search by CAS' required />
        <label htmlFor="search">Search by CAS</label>
        <div id="passwordHelpBlock" className="form-text">
          Enter CAS number
        </div>
      </form>
    </div>
  )
}

export default SearchBar
