import axios from 'axios';

const BASEURL = "https://reqres.in/";
export const FETCHUSERS = `${BASEURL}api/users`;

export default class HttpUtility {
    
    static queryString = () => {
        var str = [];
        for (var p in obj)
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        return str.join("&");
    }

    static parsejson = (response) => {
        return response.data;
    }

    static validate = (response) => {
        if(response.status == 401){

        }else{
            return {};
        }
    }

    static getRequest = async (url, param) =>{
        var url = url;
        if(param){
            url += `?${queryString(param)}`;
        }
       return await axios.get(url).then(this.parsejson).catch(this.validate);
    } 
}
