import React, { useState } from 'react';
import './IAMConfigTable.css';

const IAMConfigTable = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPermissions, setUserPermissions] = useState([]);

    const availablePermissions = ['Read', 'Write', 'Execute'];

    const handleLogin = (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements;
        // Simulate an authentication check
        if (username.value === 'admin' && password.value === 'admin123') {
            setIsAuthenticated(true);
            setUserName(username.value);
            setUserPermissions(['Read', 'Write']);
        } else if (username.value === 'user' && password.value === 'user123') {
            setIsAuthenticated(true);
            setUserName(username.value);
            setUserPermissions(['Read']);
        } else {
            alert('Invalid credentials');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUserName('');
        setUserPermissions([]);
    };

    const togglePermission = (permission) => {
        setUserPermissions((prevPermissions) =>
            prevPermissions.includes(permission)
                ? prevPermissions.filter((perm) => perm !== permission)
                : [...prevPermissions, permission]
        );
    };

    return (
        <div className="iam-config-table">
            {!isAuthenticated ? (
                <form onSubmit={handleLogin} className="login-form">
                    <h2>Sign In</h2>
                    <input type="text" name="username" placeholder="Username" required />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Sign In</button>
                </form>
            ) : (
                <div className="user-panel">
                    <h2>Welcome, {userName}</h2>
                    <div className="permissions-grid">
                        {availablePermissions.map((permission) => (
                            <div key={permission} className="permission-item">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={userPermissions.includes(permission)}
                                        onChange={() => togglePermission(permission)}
                                    />
                                    {permission}
                                </label>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default IAMConfigTable;
