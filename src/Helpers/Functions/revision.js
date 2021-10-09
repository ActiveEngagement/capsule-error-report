import axios from 'axios';
import md5 from 'crypto-js/md5';

export default function revision(signedUrl, data = {}, options) {
    data.key = data.key || md5(data.filename).toString();

    return new Promise((resolve, reject) => {
        axios.post(signedUrl, data, options)
            .then(response => {
                resolve(response.data);
            }, e => {
                reject(e);
            });
    });
}