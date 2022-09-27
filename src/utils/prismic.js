import fetch from 'node-fetch';
import { createClient } from '@prismicio/client';


export const prismic = createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetch
})
