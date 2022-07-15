import useSWR from 'swr'

const fetcher =  (...args) => fetch(...args).then((res) => res.json())

function getData(){
    const {data, error} = useSWR('http://localhost:3000/api/contacts/1', fetcher)
    
    if(error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>

    return (
        <div>
            <h1>{data.name}</h1>
            <h1>{data.email}</h1>
        </div>
    )
}

module.exports = getData;

