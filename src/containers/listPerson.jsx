import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from '../components/table'
import '../containers/listPerson.scss'

const ListPersonComponent = () => {

  const dataListPerson = useSelector(state => state.Person);

  const dispatch = useDispatch();
  const [name, updateName] = useState("");
  const [sex, updateSex] = useState("");
  const [hobby, updateHobby] = useState("");
 

  const onChangeName = (e) => {
    updateName(e.target.value);
  };
  const onChangeSex = (e) => {
    updateSex(e.target.value);
  };
  const onChangeHobby = (e) => {
    updateHobby(e.target.value);
  };
  

  const handleClickSubmit = () => {
    let itemUpdate = {
      id: Math.random(),
      name: name,
      sex: sex,
      hobby: hobby,
    };
    dispatch({
      type: 'ADD_PERSON',
      payload: itemUpdate
    })
    updateName("");
    updateSex("");
    updateHobby("");
  };

  // const handleSearch =(search)=>{
  //   let sourceArray = items;
  //   const [newArr, setnewArr] = useState([]);
  //   if(search.length <=0 ){
  //     newArr = sourceArray;
  //   }
  //   else{
  //     search.toLowerCase();
  //     for(let  i of sourceArray){
  //       if(i.name.toLowerCase().indexOf(search) > -1){
  //         newArr.push(i);
  //       }
  //     }
  //   }

  //   setnewArr({
  //     items: newArr,
  //   })
  // }
  return (
    <div className= 'main'>
      <h3 className="add-person">
        ADD PERSON
      </h3>
      <div className= 'list-in'>
        
        <input type="text" onChange={onChangeName} value={name} placeholder= 'Họ tên'/>
        <input type="text" onChange={onChangeSex} value={sex}  placeholder=  'Giới tính'/>
        <input type="text" onChange={onChangeHobby} value={hobby} placeholder=  'Sở thích'/>
      
        <button onClick={handleClickSubmit} className='btn btn-primary' >Add Person</button>
      </div>
      {/* <div className="list-serch">
        <h2 className="title-search">SEARCH-PERSON</h2>
        <input type="text" />
        <button onClick= {handleSearch}>Search</button>
      </div> */}
      <h3 className="list-person"> LIST PERSON</h3>
      <Table dataTableContent={dataListPerson} ></Table>
    </div>
  );
};

export default ListPersonComponent;
