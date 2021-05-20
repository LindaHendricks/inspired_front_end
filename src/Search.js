import styled from "styled-components";

const Div = styled.div`
margin: auto;
width: 50%;
padding: 10px;
`

const Input = styled.input`
margin: auto;
width: 50%;
padding: 10px;
text-align: center;
margin-top: 10px;
font-size: 10px;
`




function Search({searchTerm, setSearchTerm}) {

return (

<Div className="searchbar">
 <label >Search Image:</label>
 <Input type="text" id="search" placeholder="Type a keyword..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
</Div>


)


}




//     function handleSearch (event) {
//         event.preventDefault()
//         setSearchTerm(searchTerm)
//     }

//     return (
         
//     <form onSubmit={handleSearch} action="/action_page.php">
//       <input type="text"
//           id="search"
//           placeholder="Type a name to search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}/>
//       <button type="submit">Submit</button>
//     </form>
 

//     )
        
// }
 
export default Search;
