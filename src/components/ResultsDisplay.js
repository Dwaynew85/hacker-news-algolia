import React from 'react'

function ResultsDisplay({result}) {

    const convertDate = (result) => {
        const currentDate = new Date(result.created_at);
        const date = currentDate.toDateString()
        const time = currentDate.toLocaleTimeString()
        return <h6>created: {date + ' ' + time}</h6>
    }
    
    return (
        <div>            
            <a href={result.url} target="_blank" rel="noreferrer"><h2>{result.title}</h2></a>
            <p>by: {result.author}</p>
            {convertDate(result)}
            <br/>
        </div>
    )
}

export default ResultsDisplay
