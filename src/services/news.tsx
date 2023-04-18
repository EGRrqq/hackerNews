import axios, { AxiosResponse } from "axios";
import { INews, IComment } from "../types/types";

const baseURL = 'https://hacker-news.firebaseio.com/v0/'

const getNewsId = async () => {
    const response: AxiosResponse<Array<number>> = await axios.get(`${baseURL}topstories.json`)
    
    return response.data
}

const getNews = async (id: number | string) => {
    const response: AxiosResponse<INews & IComment> = await axios.get(`${baseURL}/item/${id}.json`)
    
    return response.data
}

export default { getNewsId, getNews }