import React from 'react'
import { Table } from 'react-bootstrap'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='table'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Chapman</td>
            <td>@mchapman</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fatman</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Chapman</td>
            <td>@mchapman</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fatman</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Chapman</td>
            <td>@mchapman</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fatman</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Contact