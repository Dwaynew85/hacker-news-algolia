import React from 'react'
import SearchForm from './SearchForm'
import Results from './Results'
import { connect } from 'react-redux';

function HackerNews({searchTerm, history, addSearchTerm}) {
    return (
        <div>
           <SearchForm addSearchTerm={addSearchTerm}/>
           {searchTerm ?<Results searchTerm={searchTerm} /> : ''}     
        </div>
    )
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm,
        history: state.history
    }
}

const mapDispatchToProps = dispatch =>({
    addSearchTerm: term => dispatch({ type: "SEARCH", term})
})
export default connect(mapStateToProps, mapDispatchToProps)(HackerNews);
