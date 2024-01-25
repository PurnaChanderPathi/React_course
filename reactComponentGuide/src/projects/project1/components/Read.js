import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';

function Read() {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState('');
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const handleNext = () => {
    if (activePage < Math.ceil(data.length / itemsPerPage)) {
      setActivePage(activePage + 1);
    }
  };
  const handlePrevious = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };



  const getData = () => {
    axios.get(`http://localhost:9192/customer/all`).then((res) => {
      setData(res.data);
    });
  };

  function handleDelete(id) {
    axios.delete(`http://localhost:9192/customer/${id}`).then(() => {
      getData();
    });
  }

  const setToLocalHost = (id, name, email, mobile) => {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('mobile', mobile);
  };

  useEffect(() => {
    getData();
  }, []);

  // Calculate the index range for the current page
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            setTableDark((prevTableDark) =>
              prevTableDark === 'table-dark' ? '' : 'table-dark'
            );
          }}
        />
      </div>
      <Box  className="d-flex justify-content-between m-2">
        <Grid><h2>Read Operation</h2></Grid>
        <Grid><Link to="/">
          <Button variant="contained" color="secondary">
            Create
          </Button>
        </Link></Grid>
        
      </Box>

      <Box sx={{width:"100vh",display:"flex",}}>
      <Card sx={{width:"100vh",backgroundColor:"gray"}} elevation={4}>
        <CardContent>
          <table className={`table ${tabledark}`}>
            <thead>
              <tr style={{color:"purple"}}>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Action</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((eachData) => (
                <tr key={eachData.id}>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.mobile}</td>
                  <td>
                    <Link to="/update">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() =>
                          setToLocalHost(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.mobile
                          )
                        }
                      >
                        Edit
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
      </Box>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={handlePrevious}>
              <KeyboardArrowLeftIcon />
            </a>
          </li>
          <li className="page-item">
            <span className="page-link">
              {activePage} of {totalPages}
            </span>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={handleNext}>
              <KeyboardArrowRightIcon />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Read;
