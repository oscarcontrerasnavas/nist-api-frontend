import SubstanceCard from "./substance-card"

function SubstanceList({substances}) {
  return (
    <div className='row'>
        <div className='col substances'>
          {substances.map((substance)=>(
            <SubstanceCard key={substance.cas} substance={substance} />
          ))}
        </div>
    </div>
  )
}

export default SubstanceList