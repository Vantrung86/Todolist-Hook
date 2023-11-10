import React, { useState } from 'react'
import Student from './Student';
// import { Pagination } from 'antd';

export default function ListStudent({data,handleDelete,handleEdit}) {

// phan trang
// const [currentPage, setCurrentPage] = useState(1);
// const itemsPerPage = 2;
// const endIndex = currentPage * itemsPerPage;
// const startIndex = endIndex - itemsPerPage;
// const displayedProducts = data.slice(startIndex, endIndex);
// const onPageChange = (page) => {
//     setCurrentPage(page);
// };

  return (
    <> 
      
        {data.map((element,index)=>(
          
            <Student key={index} item={element} index={index} handleDelete={handleDelete} handleEdit={handleEdit}></Student>
      
        ))} 

            {/*      
            <div style={{display: "flex", justifyContent: "center"}}>
                <Pagination
                    current={currentPage}
                    onChange={onPageChange}
                    pageSize={itemsPerPage}
                    total={data.length}
                />
            </div> */}
         
    </>
  )
}
