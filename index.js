import express from 'express';
import bodyParser from 'body-parser';
import appSrc from './app.js';
import puppeteer from "puppeteer";

const app = appSrc(express, bodyParser, puppeteer);

app.listen(process.env.PORT ?? 4321);
