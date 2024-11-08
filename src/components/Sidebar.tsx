const Sidebar = () => {
  return (
    <aside
      style={{
        width: '220px',
        padding: '30px 20px',
        backgroundColor: '#333333',
        color: '#ffffff',
        borderRight: '1px solid #444444',
        borderRadius: '12px 0 0 12px',
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
        {['Home', 'Profile', 'Settings', 'Logout'].map((item, index) => (
          <li
            key={index}
            style={{
              margin: '15px 0',
              padding: '10px 15px',
              borderRadius: '8px',
              cursor: 'pointer',
              color: '#ffffff',
              fontWeight: '500',
              transition: 'background 0.3s',
              fontFamily: 'Roboto',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#22c55e')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = 'transparent')
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
