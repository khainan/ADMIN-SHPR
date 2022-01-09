import React, { useState, useEffect } from 'react';

// styles
import './styles.scss';

export default function Dashboard() {
  const [users, setListUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const menus = [{ icon: '', title: 'Dashboard' }];

  const nextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const previousPage = () => {
    if (currentPage) {
      setCurrentPage((page) => page - 1);
    }
  };

  return (
    <div id="dashboard" className="dashboard">
      <div className="dashboard-header">
        <img alt='' src="https://assets-cdn.shipper.id/shipper-id-v5-web/release-5.5.0/assets/images/logo-shipper.svg" />
        <div className="dashboard-header-user">
          <p>{`Hello, ${'Shipper User'}`}</p>
          <img alt='' />
        </div>
      </div>
      <div className="dashboard-sidebar">
        {menus.map((menu, index) => (
          <div className="dashboard-menu" key={index}>
            <img src={menu.icon} alt={menu.icon} />
            <p>{menu.title}</p>
          </div>
        ))}
      </div>
      <div className="dashboard-content">
          <div className="dashboard-content-header">
              <div className="dashboard-content-header-title">
                <h1>DRIVER MANAGEMENT</h1>
                <p>Data driver yang bekerja dengan anda.</p>
              </div>
              <div className="dashboard-content-header-action">
                <div className="search-input">
                  <img src="" alt="" />
                  <input placeholder='Cari driver'/>
                </div>
                <button>TAMBAH DRIVER</button>
              </div>
          </div>
      </div>
    </div>
  );
}
