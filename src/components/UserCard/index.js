import React from 'react';
import moment from 'moment';

// styles
import './styles.scss';

export default function UserCard({ user, key }) {
  const { name, cell, email, dob, picture, id } = user;
  return (
    <div className="dashboard-user-card" key={key}>
      <div className="dashboard-user-card-header">
        <p>
          Driver ID: <span>{(id.value || '').slice(0, 5) || '-'}</span>
        </p>
        <div />
      </div>
      <div className="dashboard-user-card-body">
        <img src={picture.large} alt="" />
        <h5>Nama Driver</h5>
        <p>{`${name.first} ${name.last}`}</p>
        <h5>Telephone</h5>
        <p>{cell}</p>
        <h5>Email</h5>
        <p>{email}</p>
        <h5>Tanggal Lahir</h5>
        <p>{moment(dob.date).format('DD MMM YYYY')}</p>
      </div>
    </div>
  );
}
