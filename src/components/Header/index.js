import React from 'react';

// styles
import './styles.scss';

export default function Header() {
  return (
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
  );
}
