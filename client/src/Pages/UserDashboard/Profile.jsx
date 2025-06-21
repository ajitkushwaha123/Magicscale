



// import React, { useState, useEffect } from "react";
// import Sidebar from "../../components/userDashboard/Sidebar";
// import Topbar from "../../components/userDashboard/Topbar";
// import axios from "axios";

// const Profile = () => {
//   const [profile, setProfile] = useState(null);
//   const [formData, setFormData] = useState({ name: "", phone: "" });
//   const [files, setFiles] = useState({});
//   const [uploadError, setUploadError] = useState(null);

//   const token = localStorage.getItem("token");

//   const fetchProfile = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/user/profile", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProfile(res.data);
//       setFormData({ name: res.data.name, phone: res.data.phone || "" });
//     } catch (err) {
//       console.error("Failed to fetch profile:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     const file = files[0];
//     const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
//     const maxSize = 1 * 1024 * 1024; // 1MB

//     if (!allowedTypes.includes(file.type)) {
//       setUploadError("Only JPG, PNG, or PDF files are allowed.");
//       return;
//     }

//     if (file.size > maxSize) {
//       setUploadError("File too large. Max allowed size is 1MB.");
//       return;
//     }

//     setUploadError(null);
//     setFiles((prev) => ({ ...prev, [name]: file }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setUploadError(null);

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("phone", formData.phone);
//     if (files.profilePhoto) data.append("profilePhoto", files.profilePhoto);
//     if (files.aadharCard) data.append("aadharCard", files.aadharCard);
//     if (files.panCard) data.append("panCard", files.panCard);

//     try {
//       await axios.put("http://localhost:5000/api/user/profile", data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       fetchProfile();
//       alert("Profile updated successfully!");
//     } catch (err) {
//       console.error("Upload failed:", err.response?.data || err.message);
//       const msg = err.response?.data?.message || "Error uploading files";
//       setUploadError(msg);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Topbar />
//         <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow">
//           <h2 className="text-2xl font-bold mb-4 text-red-500">My Profile</h2>

//           {uploadError && (
//             <div className="text-red-500 font-semibold mb-4">{uploadError}</div>
//           )}

//           {profile && (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>

//               <div>
//                 <label>Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>

//               <div>
//                 <label>Profile Photo</label>
//                 <input
//                   type="file"
//                   name="profilePhoto"
//                   onChange={handleFileChange}
//                 />
//                 {profile.profilePhoto && (
//                   <img
//                     src={`http://localhost:5000${profile.profilePhoto}`}
//                     alt="Profile"
//                     className="h-16 w-16 mt-2 rounded-full"
//                   />
//                 )}
//               </div>

//               <div>
//                 <label>Aadhar Card</label>
//                 <input
//                   type="file"
//                   name="aadharCard"
//                   onChange={handleFileChange}
//                 />
//                 {profile.aadharCard && (
//                   <a
//                     href={`http://localhost:5000${profile.aadharCard}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline block mt-1"
//                   >
//                     View Aadhar
//                   </a>
//                 )}
//               </div>

//               <div>
//                 <label>PAN Card</label>
//                 <input
//                   type="file"
//                   name="panCard"
//                   onChange={handleFileChange}
//                 />
//                 {profile.panCard && (
//                   <a
//                     href={`http://localhost:5000${profile.panCard}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline block mt-1"
//                   >
//                     View PAN
//                   </a>
//                 )}
//               </div>

//               <button className="bg-red-500 text-white px-4 py-2 rounded">
//                 Update Profile
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;




// import React, { useState, useEffect } from "react";
// import Sidebar from "../../components/userDashboard/Sidebar";
// import Topbar from "../../components/userDashboard/Topbar";
// import axios from "axios";

// const Profile = () => {
//   const [profile, setProfile] = useState(null);
//   const [formData, setFormData] = useState({ name: "", phone: "" });
//   const [files, setFiles] = useState({});
//   const [uploadError, setUploadError] = useState(null);

//   const token = localStorage.getItem("token");

//   const fetchProfile = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/user/profile", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProfile(res.data);
//       setFormData({ name: res.data.name, phone: res.data.phone || "" });
//     } catch (err) {
//       console.error("Failed to fetch profile:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     const file = files[0];
//     const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
//     const maxSize = 1 * 1024 * 1024; // 1MB

//     if (!allowedTypes.includes(file.type)) {
//       setUploadError("Only JPG, PNG, or PDF files are allowed.");
//       return;
//     }

//     if (file.size > maxSize) {
//       setUploadError("File too large. Max allowed size is 1MB.");
//       return;
//     }

//     setUploadError(null);
//     setFiles((prev) => ({ ...prev, [name]: file }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setUploadError(null);

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("phone", formData.phone);
//     if (files.profilePhoto) data.append("profilePhoto", files.profilePhoto);
//     if (files.aadharCard) data.append("aadharCard", files.aadharCard);
//     if (files.panCard) data.append("panCard", files.panCard);

//     try {
//       await axios.put("http://localhost:5000/api/user/profile", data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       fetchProfile();
//       alert("Profile updated successfully!");
//     } catch (err) {
//       console.error("Upload failed:", err.response?.data || err.message);
//       const msg = err.response?.data?.message || "Error uploading files";
//       setUploadError(msg);
//     }
//   };

//   return (
//     <div className="flex bg-gray-100 min-h-screen">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Topbar />

//         <div className="p-4 md:p-8 bg-white">
//           {/* Banner */}
//           <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden shadow">
//             <img
//               src="/banner.jpg" // Your banner image
//               alt="Company Banner"
//               className="w-full h-full object-cover"
//             />
//             {/* Profile Image */}
//             <div className="absolute -bottom-12 left-6">
//               <img
//                 src={
//                   profile?.profilePhoto
//                     ? `http://localhost:5000${profile.profilePhoto}`
//                     : "/default-avatar.png"
//                 }
//                 alt="Profile"
//                 className="w-24 h-24 md:w-32 md:h-32 border-4 border-white rounded-full object-cover shadow-lg"
//               />
//             </div>
//           </div>

//           {/* Profile Form */}
//           <div className="mt-16 max-w-3xl mx-auto bg-white rounded-xl shadow p-6 space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
//               Edit Profile
//             </h2>

//             {uploadError && (
//               <div className="text-red-600 font-medium">{uploadError}</div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium">Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg p-2 mt-1"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg p-2 mt-1"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium">
//                   Change Profile Photo
//                 </label>
//                 <input
//                   type="file"
//                   name="profilePhoto"
//                   onChange={handleFileChange}
//                   className="mt-1"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium">Aadhar Card</label>
//                 <input
//                   type="file"
//                   name="aadharCard"
//                   onChange={handleFileChange}
//                   className="mt-1"
//                 />
//                 {profile?.aadharCard && (
//                   <a
//                     href={`http://localhost:5000${profile.aadharCard}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline mt-1 block"
//                   >
//                     View Aadhar
//                   </a>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium">PAN Card</label>
//                 <input
//                   type="file"
//                   name="panCard"
//                   onChange={handleFileChange}
//                   className="mt-1"
//                 />
//                 {profile?.panCard && (
//                   <a
//                     href={`http://localhost:5000${profile.panCard}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline mt-1 block"
//                   >
//                     View PAN
//                   </a>
//                 )}
//               </div>

//               <div className="pt-4">
//                 <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
//                   Update Profile
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;









import React, { useState, useEffect } from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Topbar from "../../components/userDashboard/Topbar";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [files, setFiles] = useState({});
  const [uploadError, setUploadError] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const token = localStorage.getItem("token");

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(res.data);
      setFormData({ name: res.data.name, phone: res.data.phone || "" });
    } catch (err) {
      console.error("Failed to fetch profile:", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 1 * 1024 * 1024; // 1MB

    if (!allowedTypes.includes(file.type)) {
      setUploadError("Only JPG, PNG, or PDF files are allowed.");
      return;
    }

    if (file.size > maxSize) {
      setUploadError("File too large. Max allowed size is 1MB.");
      return;
    }

    setUploadError(null);
    setFiles((prev) => ({ ...prev, [name]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadError(null);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    if (files.profilePhoto) data.append("profilePhoto", files.profilePhoto);
    if (files.aadharCard) data.append("aadharCard", files.aadharCard);
    if (files.panCard) data.append("panCard", files.panCard);

    try {
      await axios.put("http://localhost:5000/api/user/profile", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      fetchProfile();
      alert("Profile updated successfully!");
      setEditMode(false);
    } catch (err) {
      console.error("Upload failed:", err.response?.data || err.message);
      const msg = err.response?.data?.message || "Error uploading files";
      setUploadError(msg);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow z-10">
        <Sidebar />
      </div>

      <div className="ml-64 flex-1 flex flex-col">
        <Topbar />

        <div className="p-4 md:p-8 bg-white">
          {/* Banner */}
          <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden shadow">
            <img
              src="/banner.jpg"
              alt="Company Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-12 left-6">
              <img
                src={
                  profile?.profilePhoto
                    ? `http://localhost:5000${profile.profilePhoto}`
                    : "/default-avatar.png"
                }
                alt="Profile"
                className="w-24 h-24 md:w-32 md:h-32 border-4 border-white rounded-full object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="mt-20 max-w-3xl mx-auto bg-white rounded-xl shadow p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
              {!editMode && (
                <button
                  onClick={() => setEditMode(true)}
                  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  Edit Profile
                </button>
              )}
            </div>

            {uploadError && (
              <div className="text-red-600 font-medium">{uploadError}</div>
            )}

            {!editMode && profile && (
              <div className="space-y-4">
                <div>
                  <strong>Name:</strong> {profile.name}
                </div>
                <div>
                  <strong>Email:</strong> {profile.email}
                </div>
                <div>
                  <strong>Phone:</strong> {profile.phone || "Not Provided"}
                </div>
              </div>
            )}

            {editMode && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Change Profile Photo</label>
                  <input
                    type="file"
                    name="profilePhoto"
                    onChange={handleFileChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Aadhar Card</label>
                  <input
                    type="file"
                    name="aadharCard"
                    onChange={handleFileChange}
                    className="mt-1"
                  />
                  {profile?.aadharCard && (
                    <a
                      href={`http://localhost:5000${profile.aadharCard}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline mt-1 block"
                    >
                      View Aadhar
                    </a>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">PAN Card</label>
                  <input
                    type="file"
                    name="panCard"
                    onChange={handleFileChange}
                    className="mt-1"
                  />
                  {profile?.panCard && (
                    <a
                      href={`http://localhost:5000${profile.panCard}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline mt-1 block"
                    >
                      View PAN
                    </a>
                  )}
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
