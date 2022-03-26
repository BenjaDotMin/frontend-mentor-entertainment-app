function  NoResults({data, type}) {
    return (
        <div className="no-results">
           {data.length == 0 && <p>No {type} found. Please check your search query.</p>}     
        </div>
    )
}

export default  NoResults
