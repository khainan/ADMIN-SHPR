import React, { useState } from 'react';
import classNames from 'classnames';

// icon
import hamburgerIcon from './assets/hamburger-icon.png';

// styles
import './styles.scss';

export default function Header({ menus }) {
  const [open, setOpen] = useState(false);

  const handleOpenSidebar = () => {
    setOpen((sidebar) => !sidebar);
  };

  return (
    <div className="dashboard-header-sidebar">
      <div className="dashboard-header">
        <div className="dashboard-header-logo">
          <img
            className="hamburger-icon"
            src={hamburgerIcon}
            alt=""
            onClick={handleOpenSidebar}
          />
          <img
            className="shipper-logo"
            alt=""
            src="https://assets-cdn.shipper.id/shipper-id-v5-web/release-5.5.0/assets/images/logo-shipper.svg"
          />
        </div>
        <div className="dashboard-header-user">
          <p>
            Hello, <span>{'Shipper User'}</span>
          </p>
          <div />
        </div>
      </div>
      <div className={classNames('dashboard-sidebar', { open: open })}>
        {(menus || []).map((menu, index) => (
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
    </div>
  );
}
