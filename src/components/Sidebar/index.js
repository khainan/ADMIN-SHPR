import React from 'react';
import classNames from 'classnames';

// styles
import './styles.scss';

export default function Sidebar({ menus }) {
  return (
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
  );
}
