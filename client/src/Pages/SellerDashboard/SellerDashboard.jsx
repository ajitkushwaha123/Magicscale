

// // File: /pages/SellerDashboard
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // mport Sidebar from "../../components/userDashboard/Sidebar";
// // import Topbar from "../../components/userDashboard/Topbar";
// import Sidebar from "../../components/SellerDashboard/Sidebar";
// import Topbar from "../../components/SellerDashboard/Topbar";

// const SellerDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/admin/users", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers(res.data);
//       } catch (err) {
//         console.error("Failed to fetch users", err);
//       }
//     };

//     fetchUsers();
//   }, [token]);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Topbar />
//         <div className="p-6 overflow-auto">
//           <h2 className="text-2xl font-bold text-red-500 mb-4">All Customers</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full table-auto bg-white shadow rounded-xl">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-3 text-left">Name</th>
//                   <th className="p-3 text-left">Email</th>
//                   <th className="p-3 text-left">Profile Photo</th>
//                   <th className="p-3 text-left">Aadhar</th>
//                   <th className="p-3 text-left">PAN</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user._id} className="border-t">
//                     <td className="p-3">{user.name}</td>
//                     <td className="p-3">{user.email}</td>
//                     <td className="p-3">
//                       {user.profilePhoto && (
//                         <img
//                           src={`http://localhost:5000${user.profilePhoto}`}
//                           alt="Profile"
//                           className="h-12 w-12 rounded-full"
//                         />
//                       )}
//                     </td>
//                     <td className="p-3">
//                       {user.aadharCard ? (
//                         <a
//                           href={`http://localhost:5000${user.aadharCard}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 underline"
//                         >
//                           Download
//                         </a>
//                       ) : (
//                         "-"
//                       )}
//                     </td>
//                     <td className="p-3">
//                       {user.panCard ? (
//                         <a
//                           href={`http://localhost:5000${user.panCard}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 underline"
//                         >
//                           Download
//                         </a>
//                       ) : (
//                         "-"
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;











// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../../components/SellerDashboard/Sidebar";
// import Topbar from "../../components/SellerDashboard/Topbar";

// const SellerDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/admin/users", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers(res.data);
//       } catch (err) {
//         console.error("Failed to fetch users", err);
//       }
//     };

//     fetchUsers();
//   }, [token]);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Topbar />
//         <div className="p-6 overflow-auto">
//           <h2 className="text-2xl font-bold text-red-500 mb-4">All Customers</h2>

//           <div className="overflow-x-auto">
//             <table className="w-full bg-white shadow rounded-xl">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-3 text-left">Name</th>
//                   <th className="p-3 text-left">Email</th>
//                   <th className="p-3 text-left">Phone</th>
//                   <th className="p-3 text-left">Role</th>
//                   <th className="p-3 text-left">Profile Photo</th>
//                   <th className="p-3 text-left">Aadhar Card</th>
//                   <th className="p-3 text-left">PAN Card</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user._id} className="border-t hover:bg-gray-50">
//                     <td className="p-3">{user.name}</td>
//                     <td className="p-3">{user.email}</td>
//                     <td className="p-3">{user.phone || "-"}</td>
//                     <td className="p-3 capitalize">{user.role}</td>

//                     <td className="p-3">
//                       {user.profilePhoto ? (
//                         <img
//                           src={`http://localhost:5000${user.profilePhoto}`}
//                           alt="Profile"
//                           className="h-12 w-12 rounded-full object-cover"
//                         />
//                       ) : (
//                         "-"
//                       )}
//                     </td>

//                     <td className="p-3">
//                       {user.aadharCard ? (
//                         <a
//                           href={`http://localhost:5000${user.aadharCard}`}
//                            download 
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 underline"
//                         >
//                           Download
//                         </a>
//                       ) : (
//                         "-"
//                       )}
//                     </td>

//                     <td className="p-3">
//                       {user.panCard ? (
//                         <a
//                           href={`http://localhost:5000${user.panCard}`}
//                           download
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 underline"
//                         >
//                           Download
//                         </a>
//                       ) : (
//                         "-"
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {users.length === 0 && (
//               <p className="text-center text-gray-500 py-10">No users found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;





import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/SellerDashboard/Sidebar";
import Topbar from "../../components/SellerDashboard/Topbar";

const SellerDashboard = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };

    fetchUsers();
  }, [token]);

  const getDownloadUrl = (filePath) => {
    const cleanPath = filePath.replace("/uploads/", "");
    return `http://localhost:5000/api/download?path=${cleanPath}`;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <div className="p-6 overflow-auto">
          <h2 className="text-2xl font-bold text-red-500 mb-4">All Customers</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow rounded-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Profile Photo</th>
                  <th className="p-3 text-left">Aadhar Card</th>
                  <th className="p-3 text-left">PAN Card</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.phone || "-"}</td>
                    <td className="p-3 capitalize">{user.role}</td>

                    <td className="p-3">
                      {user.profilePhoto ? (
                        <img
                          src={`http://localhost:5000${user.profilePhoto}`}
                          alt="Profile"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        "-"
                      )}
                    </td>

                    <td className="p-3">
                      {user.aadharCard ? (
                        <a
                          href={getDownloadUrl(user.aadharCard)}
                          className="text-blue-500 underline"
                        >
                          Download
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>

                    <td className="p-3">
                      {user.panCard ? (
                        <a
                          href={getDownloadUrl(user.panCard)}
                          className="text-blue-500 underline"
                        >
                          Download
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {users.length === 0 && (
              <p className="text-center text-gray-500 py-10">No users found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
