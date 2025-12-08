import React from 'react';

const ReportSection = ({ reports }) => {

return (
  <div className="report-section">
    <h2>Recent Reports</h2>
    {reports.length === 0 ? (
      <p>No reports yet. Submit a soil sample to get started!</p>
    ) : (
      <div className="report-grid">
        {reports.map((report, index) => (
          <table  id='report-table'>
            <colgroup>
            <col style={{width:"20%"}}/>
            <col style={{width:"20%"}}/>
            <col style={{width:"20%"}}/>
            <col style={{width:"40%"}}/>
            </colgroup>
            <thead>
            <tr>
              <th>Soil Type</th>
              <th>Location</th>
              <th>PH Level</th>
              <th>Image</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{report.soilType}</td>
              <td>{report.location}</td>
              <td>{report.phLevel}</td>
              <td><img src={report.image}/></td>
            </tr>
            </tbody>
          </table>
          // <div key={index} className="report-card">
          //   <img src={report.image} alt="Soil sample" className="report-image" />
          //   <p><strong>Location:</strong> {report.location}</p>
          //   <p><strong>Date:</strong> {report.soilType}</p>
          //   <p><strong>pH:</strong> {report.phLevel} ({report.phType})</p>
          //   <p><strong>Date:</strong> {report.date}</p>
          // </div>
        ))}
      </div>
    )}
  </div>
);
}

export default ReportSection;