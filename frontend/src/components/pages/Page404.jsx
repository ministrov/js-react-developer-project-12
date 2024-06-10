const Page404 = ({ message }) => (
  <div style={{ width: '345px', height: '345px', background: 'blue' }}>
    <p style={{
      textAlign: 'center', fontWeight: 'bold', fontSize: '24px', color: 'red',
    }}
    >
      {message}
    </p>
  </div>
);

export default Page404;
