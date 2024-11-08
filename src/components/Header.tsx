import ProfileImage from 'microfront/ProfileImage';

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        marginBottom: '10px',
        color: '#ffffff',
        border: '1px solid #444444',
        borderRadius: '12px 12px 12px 12px',
      }}
    >
      <h1 style={{ fontSize: '1.8rem', fontWeight: '600', margin: 0 }}>
        Dashboard
      </h1>
      <ProfileImage />
    </header>
  );
};

export default Header;
