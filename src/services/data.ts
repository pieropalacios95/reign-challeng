import axios from "axios"

export const getAllEntries = async (query: string, page: number) => {
    const result = await axios.get('https://hn.algolia.com/api/v1/search_by_date', { params: { query: query, page: page } })
        .then((res) => { return res })
        .catch((error) => { return error })
    return result
}