import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import OrderContext from '../../context/Order/OrderContext';
import UserContext from '../../context/User/UserContext';
import "./Dashboard.css";
const UserDashboard = () => {
  const { userOrders } = useContext(OrderContext);
  const { user } = useContext(UserContext);


  return (
    <>
      <div className='main'>
        <div className='container-fluid'>
          <div className='page-heading'>{user && user.name}'s Dashboard</div>
          <div className="">
            <div className="row align-items-stretch">
              <div className="c-dashboardInfo col-lg-3 col-md-6">
                <Link to="/MyOrders">
                  <div className="wrap">
                    <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">My Orders<svg
                      className="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                      </path>
                    </svg></h4><span className="hind-font caption-12 c-dashboardInfo__count">{userOrders && userOrders.length}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard
