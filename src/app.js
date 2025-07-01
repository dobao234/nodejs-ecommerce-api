import express from "express";
import postsRouter from "./routers/posts";

const app = express();

app.use("/api/posts", postsRouter);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});