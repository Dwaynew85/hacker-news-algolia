import React, { useState } from 'react'

function SearchForm() {
    const [term, setTerm] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(term);
        setTerm('')
      };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Search:
                <input 
                    type="text"
                    value={term}
                    name="term"
                    onChange={(event) => setTerm(event.target.value)}
                />
                <input type="submit" value="Search" />
            </label>
        </form>
    )
}

export default SearchForm
