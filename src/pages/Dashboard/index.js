import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import moment from 'moment';

// styles
import './styles.scss';

export default function Dashboard() {
  const [users, setListUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const menus = [
    { title: 'Home' },
    { title: 'Driver Management' },
    { title: 'Pick Up' },
  ];

  const getListUsers = async () => {
    await axios
      .get('https://randomuser.me/api/?results=5')
      .then((res) => {
        const { data } = res;
        const { results } = data || [];
        console.log(res);
        setListUsers(results);
      })
      .catch((e) => console.log(e));
  };

  const nextPage = () => {
    if (currentPage < 5) {
      setCurrentPage((page) => page + 1);
    }
  };

  const previousPage = () => {
    if (currentPage) {
      setCurrentPage((page) => page - 1);
    }
  };

  useEffect(() => {
    getListUsers();
  }, [currentPage]);

  console.log(currentPage);

  return (
    <div id="dashboard" className="dashboard">
      <div className="dashboard-header">
        <img
          alt=""
          src="https://assets-cdn.shipper.id/shipper-id-v5-web/release-5.5.0/assets/images/logo-shipper.svg"
        />
        <div className="dashboard-header-user">
          <p>
            Hello, <span>{'Shipper User'}</span>
          </p>
          <div />
        </div>
      </div>
      <div className="dashboard-sidebar">
        {menus.map((menu, index) => (
          <div
            className={classNames('dashboard-sidebar-menu', {
              active: menu.title === 'Driver Management',
            })}
            key={index}
          >
            <div />
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
              <div className="search-icon" />
              <input placeholder="Cari driver" />
            </div>
            <button className="button">TAMBAH DRIVER +</button>
          </div>
        </div>
        <div className="dashboard-content-body">
          {(users || []).map((user, index) => (
            <div className="dashboard-user-card" key={index}>
              <div className="dashboard-user-card-header">
                <p>
                  Driver ID:{' '}
                  <span>{(user.id.value || '').slice(0, 5) || '-'}</span>
                </p>
                <div />
              </div>
              <div className="dashboard-user-card-body">
                <img src={user.picture.large} alt="" />
                <h5>Nama Driver</h5>
                <p>{`${user.name.first} ${user.name.last}`}</p>
                <h5>Telephone</h5>
                <p>{user.cell}</p>
                <h5>Email</h5>
                <p>{user.email}</p>
                <h5>Tanggal Lahir</h5>
                <p>{moment(user.dob.date).format('DD MMM YYYY')}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="dashboard-pagination">
          <button
            disabled={!currentPage}
            className={classNames({ disabled: !currentPage })}
            onClick={previousPage}
          >
            {'<'} Previous Page
          </button>
          <button
            disabled={currentPage > 5}
            className={classNames({ disabled: currentPage > 4 })}
            onClick={nextPage}
          >
            Next Page {'>'}
          </button>
        </div>
      </div>
    </div>
  );
}
