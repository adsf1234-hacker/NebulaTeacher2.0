import { useState } from 'react';

export const AuthContext = React.createContext(null);

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginTeacher = async (name: string, password: string) => {
        // Implement teacher login logic here
        // Return a session token or code
    };

    const loginStudent = async (code: string) => {
        // Implement student login logic here
        // Verify the code against the teacher-generated code
        // Return a session token or code
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, loginTeacher, loginStudent, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
