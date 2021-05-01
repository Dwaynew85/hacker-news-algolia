const searchAPI = async (term) => {
    // dispatch state
    const search = await fetch(`https://hn.algolia.com/api/v1/search?query=${term}`);
    const {hits} = await search.json();
    console.log(hits)
}

export default searchAPI