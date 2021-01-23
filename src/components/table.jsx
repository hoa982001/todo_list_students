import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import '../components/table.scss'
const Table = (props) => {
  const dispatch = useDispatch();
  const [nameInput, updateNameInput] = useState('');
  const [sexInput, updateSexInput] = useState('');
  const [hobbyInput, updateHobbyInput] = useState('');
  const [id, updateIdInput] = useState('');

  const clickEdit = (p) => {
    updateNameInput(p.name);
    updateSexInput(p.sex);
    updateHobbyInput(p.hobby);
    updateIdInput(p.id);
  }
  const submitEdit = () => {
    const newObj = {
      id: id,
      name: nameInput,
      sex: sexInput,
      hobby: hobbyInput
    }
    dispatch({ type: 'EDIT_PERSON', payload: newObj })
    updateNameInput('');
    updateSexInput('');
    updateHobbyInput('');
  }
  return <div className= 'container'>
    <table>
      <thead>
        <td>Họ Tên</td>
        <td>Giới tính</td>
        <td>Sở thích</td>
        <td>Xóa</td>
        <td>Sửa</td>
      </thead>
      <tbody>
        {props.dataTableContent.map((x, index) => (
          <tr>
            <td>{x.name}</td>
            <td>{x.sex}</td>
            <td>{x.hobby}</td>
            <td>
            <button className='btn btn-danger' onClick={() =>dispatch({ type: 'DELETE_PERSON', payload: x.id }) }>delete</button></td>
            <td>
              <input type="button" value='edit' className='btn btn-warning' onClick={() => clickEdit(x)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="list-edit">
      <h3 className= 'title-edit'>EDIT PERSON</h3>
      <input type="text" value={nameInput} onChange={(e) => updateNameInput(e.target.value)} placeholder= 'Họ tên'/>
      <input type="text" value={sexInput} onChange={(e) => updateSexInput(e.target.value)} placeholder= 'Giới tính'/>
      <input type="text" value={hobbyInput} onChange={(e) => updateHobbyInput(e.target.value)} placeholder= 'Sở Thích' />
      <input type="button" value='edit' onClick={submitEdit} className='btn btn-success' />
    </div>
  </div>
}

export default Table;