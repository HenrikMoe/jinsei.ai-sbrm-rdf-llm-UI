import React, { useState } from 'react';
import './DeploymentTable.css'; // Import the CSS file

const DeploymentTable = () => {
  const [deployments, setDeployments] = useState([
    { id: 1, name: 'Web App', process: 'Start', replicas: 2 },
    { id: 2, name: 'API Server', process: 'Stop', replicas: 1 },
    // Add more initial deployments as needed
  ]);

  const handleProcessChange = (id, newProcess) => {
    const updatedDeployments = deployments.map((deployment) =>
      deployment.id === id ? { ...deployment, process: newProcess } : deployment
    );
    setDeployments(updatedDeployments);
  };

  const handleReplicasChange = (id, newReplicas) => {
    const updatedDeployments = deployments.map((deployment) =>
      deployment.id === id ? { ...deployment, replicas: newReplicas } : deployment
    );
    setDeployments(updatedDeployments);
  };

  return (
    <div>
    <div>Processes</div>
    <table className="deployment-table">
      <thead>
        <tr>
          <th className="table-header">Name</th>
          <th className="table-header">Process</th>
          <th className="table-header">Replicas</th>
        </tr>
      </thead>
      <tbody>
        {deployments.map((deployment) => (
          <tr key={deployment.id}>
            <td className="table-cell">{deployment.name}</td>
            <td className="table-cell">
              <select
                className="select-input"
                value={deployment.process}
                onChange={(e) => handleProcessChange(deployment.id, e.target.value)}
              >
                <option value="Start">Start</option>
                <option value="Stop">Stop</option>
              </select>
            </td>
            <td className="table-cell">
              <input
                className="number-input"
                type="number"
                value={deployment.replicas}
                onChange={(e) => handleReplicasChange(deployment.id, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DeploymentTable;
