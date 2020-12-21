import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => (
  <div>
    <Link className="c-button" to="/">
      Home
    </Link>
    <Link className="c-button" to="/contact">
      All Contacts
    </Link>
    <Link className="c-button" to="/contact/999">
      Contact 999
    </Link>
  </div>
);
