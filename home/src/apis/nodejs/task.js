import { get } from "../../core/api"

export const getAllUTasks = async () => {
    const url = 'http://localhost:4000/task/all_tasks'   ////from backend API , wecan use diffrent host on frontend url
    return await get(url)
}
