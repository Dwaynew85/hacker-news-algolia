import NoResults from "../components/NoResults";

const searchAPI = async (term) => {
    // dispatch state
    const search = await fetch(`https://hn.algolia.com/api/v1/search?query=${term}`);
    const {hits} = await search.json();
    return !hits.length ? console.log("i got nothin") : console.log(hits)
}

export default searchAPI