import '../styles/header.css';

export default function Header({ update }: { update: () => void }) {
  return (
    <>
      <div className="header-title">Notes</div>
      <button
        className="btn-update material-icons"
        onClick={() => {
          update();
        }}
      >
        sync
      </button>
    </>
  );
}
