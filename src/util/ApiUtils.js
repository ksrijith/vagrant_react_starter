export async function callApis(urls) {
    try {
        var data = [];
        if (urls) {
            if (urls instanceof Array) {
                data = await Promise.all(
                    urls.map(
                        url =>
                            fetch(url).then(
                                (response) => response.json()
                            )));
            } else {
                data.push(fetch(urls).then(
                    (response) => response.json()
                ));
            }
        }
        return (data)
 
    } catch (error) {
        console.log(error)
        throw (error)
    }
}
