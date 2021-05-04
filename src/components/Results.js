import React, { useEffect, useState } from 'react'
import ResultsDisplay from './ResultsDisplay'

function Results({searchTerm}) {
    const [results, setResults] = useState('');
    
    useEffect(() =>{
        fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`)
            .then(res => res.json())
            .then(result => setResults(result.hits))
            .catch(err =>(
                console.log(err)
            ))
    }, [searchTerm])

    return (
        <div>
            {results && results.length !== 0 && results[0].url ? results.map(result => <ResultsDisplay key={result.objectID} result={result}/>) : "--No Results Found--"}
        </div>
    )
}

export default Results
