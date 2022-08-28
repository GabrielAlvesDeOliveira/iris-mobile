const getImageInfo = (localUri) => {
    let originalname = localUri.split('/').pop()

    let match = /\.(\w+)$/.exec(originalname);
    let type = match ? `image/${match[1]}` : `image`;

    return {
        type,
        originalname
    }
}

export default getImageInfo;