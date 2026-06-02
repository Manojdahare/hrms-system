import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Login from "./pages/auth/Login";

import Register from "./pages/auth/Register";

import ForgotPassword from "./pages/auth/ForgotPassword";

import ResetPassword from "./pages/auth/ResetPassword";

import AdminDashboard from "./pages/admin/AdminDashboard";

import HRDashboard from "./pages/hr/HRDashboard";

import EmployeeDashboard from "./pages/employee/EmployeeDashboard";

import Dashboard from "./pages/dashboard/Dashboard";

import Employees from "./pages/employees/Employees";

import Attendance from "./pages/attendance/Attendance";

import Settings from "./pages/settings/Settings";

import Leave from "./pages/leave/Leave";

import Payroll from "./pages/payroll/Payroll";

import Profile from "./pages/profile/Profile";

import Notifications from "./pages/notifications/Notifications";

import FileUpload from "./pages/files/FileUpload";

import Reports from "./pages/reports/Reports";

import EmailCenter from "./pages/email/EmailCenter";

import ProtectedRoute from "./routes/ProtectedRoute";

import RoleProtectedRoute from "./routes/RoleProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* AUTH */}

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />

                <Route
                    path="/reset-password"
                    element={<ResetPassword />}
                />

                {/* DEFAULT DASHBOARD */}

                <Route

                    path="/dashboard"

                    element={

                        <ProtectedRoute>

                            <Dashboard />

                        </ProtectedRoute>
                    }
                />

                {/* ADMIN */}

                <Route

                    path="/admin"

                    element={

                        <ProtectedRoute>

                            <RoleProtectedRoute
                                allowedRoles={[
                                    "ADMIN"
                                ]}>

                                <AdminDashboard />

                            </RoleProtectedRoute>

                        </ProtectedRoute>
                    }
                />

                {/* HR */}

                <Route

                    path="/hr"

                    element={

                        <ProtectedRoute>

                            <RoleProtectedRoute
                                allowedRoles={[
                                    "HR"
                                ]}>

                                <HRDashboard />

                            </RoleProtectedRoute>

                        </ProtectedRoute>
                    }
                />

                {/* EMPLOYEE */}

                <Route

                    path="/employee"

                    element={

                        <ProtectedRoute>

                            <RoleProtectedRoute
                                allowedRoles={[
                                    "EMPLOYEE"
                                ]}>

                                <EmployeeDashboard />

                            </RoleProtectedRoute>

                        </ProtectedRoute>
                    }
                />

                {/* EMPLOYEES */}

                <Route

                    path="/employees"

                    element={

                        <ProtectedRoute>

                            <RoleProtectedRoute
                                allowedRoles={[
                                    "ADMIN",
                                    "HR"
                                ]}>

                                <Employees />

                            </RoleProtectedRoute>

                        </ProtectedRoute>
                    }
                />

                {/* ATTENDANCE */}

                <Route

                    path="/attendance"

                    element={

                        <ProtectedRoute>

                            <Attendance />

                        </ProtectedRoute>
                    }
                />

                {/* LEAVE */}

                <Route

                    path="/leave"

                    element={

                        <ProtectedRoute>

                            <Leave />

                        </ProtectedRoute>
                    }
                />

                {/* PAYROLL */}

                <Route

                    path="/payroll"

                    element={

                        <ProtectedRoute>

                            <RoleProtectedRoute
                                allowedRoles={[
                                    "ADMIN",
                                    "HR"
                                ]}>

                                <Payroll />

                            </RoleProtectedRoute>

                        </ProtectedRoute>
                    }
                />

                {/* FILES */}

                <Route

                    path="/files"

                    element={

                        <ProtectedRoute>

                            <FileUpload />

                        </ProtectedRoute>
                    }
                />

                {/* REPORTS */}

                <Route

                    path="/reports"

                    element={

                        <ProtectedRoute>

                            <RoleProtectedRoute
                                allowedRoles={[
                                    "ADMIN",
                                    "HR"
                                ]}>

                                <Reports />

                            </RoleProtectedRoute>

                        </ProtectedRoute>
                    }
                />

                {/* NOTIFICATIONS */}

                <Route

                    path="/notifications"

                    element={

                        <ProtectedRoute>

                            <RoleProtectedRoute
                                allowedRoles={[
                                    "ADMIN",
                                    "HR"
                                ]}>

                                <Notifications />

                            </RoleProtectedRoute>

                        </ProtectedRoute>
                    }
                />

                {/* EMAIL */}

                <Route

                    path="/email"

                    element={

                        <ProtectedRoute>

                            <RoleProtectedRoute
                                allowedRoles={[
                                    "ADMIN",
                                    "HR"
                                ]}>

                                <EmailCenter />

                            </RoleProtectedRoute>

                        </ProtectedRoute>
                    }
                />

                {/* PROFILE */}

                <Route

                    path="/profile"

                    element={

                        <ProtectedRoute>

                            <Profile />

                        </ProtectedRoute>
                    }
                />

                {/* SETTINGS */}

                <Route

                    path="/settings"

                    element={

                        <ProtectedRoute>

                            <RoleProtectedRoute
                                allowedRoles={[
                                    "ADMIN"
                                ]}>

                                <Settings />

                            </RoleProtectedRoute>

                        </ProtectedRoute>
                    }
                />

                {/* FALLBACK */}

                <Route

                    path="*"

                    element={
                        <Navigate to="/" />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;