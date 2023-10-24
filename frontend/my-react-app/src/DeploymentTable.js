import React, { useState } from 'react';

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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Process</th>
          <th>Replicas</th>
        </tr>
      </thead>
      <tbody>
        {deployments.map((deployment) => (
          <tr key={deployment.id}>
            <td>{deployment.name}</td>
            <td>
              <select
                value={deployment.process}
                onChange={(e) => handleProcessChange(deployment.id, e.target.value)}
              >
                <option value="Start">Start</option>
                <option value="Stop">Stop</option>
              </select>
            </td>
            <td>
              <input
                type="number"
                value={deployment.replicas}
                onChange={(e) => handleReplicasChange(deployment.id, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeploymentTable;
