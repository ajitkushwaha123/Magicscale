// import express from 'express';
// import path from 'path';
// import fs from 'fs';

// const router = express.Router();

// // Serve a file for download
// router.get('/download', (req, res) => {
//   const filePath = req.query.path;

//   if (!filePath) {
//     return res.status(400).json({ message: 'File path is required' });
//   }

//   const absolutePath = path.resolve('uploads', filePath); // e.g. uploads/12345-aadhar.jpg

//   if (!fs.existsSync(absolutePath)) {
//     return res.status(404).json({ message: 'File not found' });
//   }

//   res.download(absolutePath); // triggers download
// });

// export default router;



import express from "express";
import path from "path";
import fs from "fs";

const router = express.Router();

// GET /api/download?path=filename.jpg
router.get("/download", (req, res) => {
  const fileName = req.query.path;

  if (!fileName) {
    return res.status(400).json({ message: "No file path provided" });
  }

  const filePath = path.resolve("uploads", fileName);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "File not found" });
  }

  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error("Download error:", err);
      res.status(500).json({ message: "Failed to download file" });
    }
  });
});

export default router;
