import React from 'react'
import {useFormik} from 'formik';
import useListShips from '../../context/ShipsContext';

const Form = () => {
    const {setName_Model}=useListShips();
    const {handleChange,handleSubmit,values}=useFormik({
        initialValues: {
            nameModel:''
        },
        onSubmit: () => {
            setName_Model(values.nameModel)

        }
    });
  return (
    <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="nameModel" className='text-secondary p-3'>Name/Model</label>
        <input onChange={handleChange} id="nameModel" name="nameModel" placeholder="Name/Model" className='form-control' />
        <button className='btn btn-secondary' type='submit'>search</button>
        </form>
    </>
  )
}

export default Form
