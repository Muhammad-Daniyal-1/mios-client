import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notification from "../../Notifications/Notifications";
import { ReactNotifications } from "react-notifications-component";
const image = window.location.origin + "/Assets/no-data.svg";
const DropshipPending = () => {
  const [allProfits, setAllProfits] = useState([]);
  useEffect(() => {
    getAllProfits()
  }, [])
  const getAllProfits = async () => {
    const { data } = await axios.get('http://localhost:5000/api/profitrecords/allprofits');
    setAllProfits(data);
  }
  const payAllProfits = async (user, amount) => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/profitrecords/payAllProfits', { userId: user, amount });
      Notification('Success', data.message, 'success')
      await getAllProfits();
    } catch (error) {
      Notification('Error', error.message, 'danger')
    }
  }


  return (
    <>
      <ReactNotifications />
      <div className="main">
        <div className="container-fluid">
          <table className="table table-hover table-bordered">
            <thead>
              <tr className="table-dark">
                <th colSpan="1" >Sr.</th>
                <th colSpan="1" className="text-center">Customer Name</th>
                <th colSpan="1" className="text-center">Company Name</th>
                <th colSpan="1" className="text-center">Contact</th>
                <th colSpan="1" className="text-center">Pending Profit</th>
                <th colSpan="1" className="text-center">Pay Profit</th>
                <th colSpan="1" className="text-center">Profit Detail</th>
              </tr>
            </thead>
            <tbody>

              {allProfits && allProfits?.map((item, key) => {
                console.log(item);
                return (<tr key={key}>
                  <td colSpan="1" className="text-center">{key + 1}</td>
                  <td colSpan="1" className="text-center">{item?.name}</td>
                  <td colSpan="1" className="text-center">{item?.company}</td>
                  <td colSpan="1" className="text-center">{item?.city}</td>
                  <td colSpan="1" className="text-center">{item?.totalProfit}</td>
                  <td colSpan="1" className="text-center"><button disabled={item?.totalProfit <= 0} onClick={() => payAllProfits(item?.id, item?.totalProfit)} className="btn btn-primary">Pay Profit </button></td>
                  <td colSpan="1" className="text-center"><Link to={`/admin/pendingprofits/byorder/${item?.id}`}><button className="btn btn-primary">Detail</button></Link></td>
                </tr>)
              })}
            </tbody>
          </table>
          {allProfits?.length <= 0 && <div className='no_data'>
            <img className='no_data-img' src={image} alt='No Data' ></img>
          </div>}
        </div>
      </div>
    </>
  );
}

export default DropshipPending;

