import React, { useState } from 'react';
import './DeploymentTable.css'; // Import the CSS file

const DeploymentTable = () => {
  const [deployments, setDeployments] = useState([
    { id: 1, name: 'Transform To XBRL', process: 'Start', replicas: 2 , uri: 'jinsei.ai/myCompany', TTL: 50000000, external: 'none'},
    { id: 2, name: 'Verifify Structure Instance 1', process: 'Stop', replicas: 1 , uri: 'jinsei.ai/myCompany', TTL: 50000000, external: 'none'},
    { id: 3, name: 'Deploy Viewable Structure Instance', process: 'Stop', replicas: 1 , uri: 'jinsei.ai/myCompany', TTL: 50000000, external: 'jinsei/models/SEC/10-K'},
    { id: 4, name: 'Deploy Writable Structure Instance', process: 'Stop', replicas: 1 , uri: 'jinsei.ai/myCompany', TTL: 50000000, external: 'jinsei/models/SEC/10-K'},

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
          <th className="table-header">URI</th>
          <th className="table-header">TTL</th>
          <th className="table-header">External</th>

        </tr>
      </thead>
      <tbody>
        {deployments.map((deployment) => (
          <tr key={deployment.id}>
            <td className="table-cell"
            contentEditable>{deployment.name}</td>
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
            <td className="table-cell">
              <input
                className="string-input"
                type="string"
                value={deployment.uri}
              />
            </td>
            <td className="table-cell">
              <input
                className="number-input"
                type="number"
                value={deployment.TTL}
              />
            </td>
            <td className="table-cell">
              <input
                className="string-input"
                type="string"
                value={deployment.external}
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
