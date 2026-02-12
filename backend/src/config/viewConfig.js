import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

const viewConfig = (app) =>{

    //Cấu hình body-parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    dotenv.config();

    //Cấu hình cors
    app.use(cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    }));

    //Cấu hình cookie-parser
    app.use(cookieParser());

    //cấu hình static files
    app.use(express.static("public"));
    
}

export default viewConfig;