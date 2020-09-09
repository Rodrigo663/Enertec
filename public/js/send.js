import axios from 'axios';
import { showAlert} from './alert.js'

export const sendData = async(data) => {
    try {

        const res = await axios({
            method: 'POST',
            url: '/api/v1/requests', 
            data,
           

        });
        if(res.status===201) {
            showAlert('success', 'O seu pedido foi enviado', 3000);
            window.setTimeout(()=> {
                location.assign('/');
            }, 3000);


            

    
        };

    } catch(err) {
        showAlert('error', err.response.data.message);


    }
}