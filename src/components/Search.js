import { Divider, Input } from "antd";


// Iteration 5
function Search(props) {
  //Filtrar



  const handleNameInput = (e) => {
    // props.setFilteredWord(e.target.value)
    props.searchFood(e.target.value)
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={handleNameInput} />
    </>
  );
}

export default Search;