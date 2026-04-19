const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Node.js App - Version 3!",
    version: "3.0.0",
    status: "running",
    updated:
      "CI`/CD pipeline updated successfully on 2024-06-01 at 12:00 PM UTC",
      name: "CI/CD Pipeline Demo App",
      author: "Nouman Shabeer",
      tech: "Node.js, Express, Docker, CI/CD my name is noman shabeer and i am a software engineer with expertise in node.js, express, docker, and ci/cd pipelines. i have successfully implemented ci/cd pipelines for various applications, ensuring seamless integration and deployment processes. my experience includes working with tools like github actions, jenkins, and aws codepipeline to automate build, test, and deployment workflows. i am passionate about optimizing development processes and delivering high-quality software efficiently.",
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
