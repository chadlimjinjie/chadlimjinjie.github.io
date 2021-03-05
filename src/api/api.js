import axios from 'axios';

export function getGitUser(user) {
    return axios.get(`https://api.github.com/users/${user}`, {
        headers: {
            "Authorization": "token 916b3f2656ae9b3b360fc69ab97ceb4a166dd624"
        }
    }).then(resp => resp.data)
}
