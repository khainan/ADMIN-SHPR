import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import axios from 'axios';

// components
import Sidebar from '../../components/Sidebar';
import UserCard from '../../components/UserCard';

// styles
import './styles.scss';

export default function Dashboard() {
  const [users, setListUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const menus = [
    { title: 'Beranda' },
    { title: 'Driver Management' },
    { title: 'Pick Up' },
  ];

  const getListUsers = async () => {
    await axios
      .get('https://randomuser.me/api/?results=5')
      .then((res) => {
        const { data } = res;
        const { results } = data || [];
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

  const searchUser = async () => {
    await axios
      .get(`https://randomuser.me/api/?results=1&name="${search}"`)
      .then((res) => {
        const { data } = res;
        const { results } = data || [];
        setListUsers(results);
      })
      .catch((e) => console.log(e));
  };

  const handleSearch = (event) => {
    const { code } = event;
    if (code === 'Enter' && search) {
      searchUser();
    }
  };

  useEffect(() => {
    getListUsers();
  }, [currentPage]);

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
      <Sidebar menus={menus} />
      <div className="dashboard-content">
        <div className="dashboard-content-header">
          <div className="dashboard-content-header-title">
            <h1>DRIVER MANAGEMENT</h1>
            <p>Data driver yang bekerja dengan anda.</p>
          </div>
          <div className="dashboard-content-header-action">
            <div className="search-input">
              <div className="search-icon" onClick={searchUser} />
              <input
                placeholder="Cari driver"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => handleSearch(e)}
              />
            </div>
            <button className="button">TAMBAH DRIVER +</button>
          </div>
        </div>
        <div className="dashboard-content-body">
          {(users || []).map((user, index) => (
            <UserCard user={user} key={index} />
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
