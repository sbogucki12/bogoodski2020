const fetchData = (url) => {
    const handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    return fetch(url)
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
        return data
    }) 
    .catch(error => console.log(error));
};

export default fetchData;