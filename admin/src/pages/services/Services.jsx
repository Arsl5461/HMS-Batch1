import DataTable from 'react-data-table-component';
import axios from "axios"
import { useState,useEffect } from 'react';




const columns = [
	{
		name: 'Title',
		selector: row => row.title,
    sortable: true,
	},
	{
		name: 'Category',
		selector: row => row.category,
	},
  {
		name: 'Price',
		selector: row => row.price,
    sortable: true,
	},
  {
		name: 'Rating',
		selector: row => row.rating.rate,
	},
  {
    name: 'Image',
    selector: row => <img src={row.image} alt="Product Image" style={{ width: '50px', height: 'auto' }} />,
  }

];


function Services() {
  const [data,setData]=useState([])
  const fetchProducts=async()=>{
    const response=await axios.get("https://fakestoreapi.com/products")
    setData(response.data)
  }
  useEffect(()=>{
    fetchProducts();
  },[])


	return (
    <div style={{marginLeft:"200px"}}>
<DataTable
			columns={columns}
			data={data}
      pagination
		/>
    </div>
		
	);
};

export default Services