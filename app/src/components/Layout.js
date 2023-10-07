import React from 'react';
import Sidenav from './Sidenav';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidenav />
      <div className="content">{children}</div>
    </div>
  );
}
