const request = async (method, path, data = null) => {
    return fetch(path, {
        method,
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })  
      .then(res => res.json())

}

export default {
    get: (path) => request('GET', path),
    post: (path, data) => request('POST', path, data),
}