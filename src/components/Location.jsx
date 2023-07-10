const Location = ({ locn = [{}] }) => {
  return (
    <div
      className="container "
      style={{ display: "flex", flexDirection: "column", gap: 60 }}
    >
      {locn.map((loc) => (
        <div className="container">
        <div className="border border-primary border-2 p-3">
          <div className="row">
            <div className="col-6 border border-2">{loc.lat1}</div>
            <div className="col-6 border border-2">{loc.lat2}</div>
          </div>
          <div className="row">
            <div className="col-6 border border-2">{loc.long1}</div>
            <div className="col-6 border border-2">{loc.long2}</div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">{loc.psp}</div>
          </div>
        </div>
      </div>
      
      ))}
    </div>
  );
};

export default Location;
