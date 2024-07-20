import React from 'react';
import '../styles/header.css';

export default function Header({ update }: { update: () => void }) {
  return (
    <>
      <div className="title">Notes</div>
      <button
        className="btn-update material-icons"
        onClick={() => {
          update();
          console.log('update')
        }}
      >
        sync
      </button>
    </>
  );
}
