import { Divider, Input } from "antd";
import { useState } from "react";


// Iteration 5
function Search(props) {
  //Filtrar
  const [filteredName, setFilteredName] = useState('');



  const handleNameInput = (e) => {
    props.setFilteredWord(e.target.value)
    props.searchFood()
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