import axios from "axios";

export default class SisgamManagerAPI {
    constructor() {
        this.axiosInstance = null;
    }

    async getAxiosInstance() {
        console.log(process.env.REACT_APP_SISGAM_API);
        if (!this.axiosInstance) {
            this.axiosInstance = axios.create(
                {
                    baseURL: process.env.REACT_APP_SISGAM_API,
                    headers: { 'Access-Control-Allow-Origin': '*' }
                }
            );
        }
        return this.axiosInstance;
    }

    // -------------------------------------------------------------------------
    //Modelo genérico para coleta de inputs e atributos de determinado retorno.
    async getObjectsUnityInfo(input, attributes) {
        let objectsUnityInfo = [];
        for (let row of input) {
            let object = {};
            for (let i = 0; i < attributes.length; i++) {
                object[attributes[i]] = row[i];
            }
            objectsUnityInfo.push(object);
        }
        return objectsUnityInfo;
    }

    async getDataUnityDetails(sede_id) {
        const axiosInstance = await this.getAxiosInstance();
        const response = await axiosInstance.post('sisgam_unity/getUnityDetails', { sedeId: sede_id });
        return response.data;
    }

    async getUnityDetails(sede_id) {
        let data = await this.getDataUnityDetails(sede_id);
        let attributes = ['userId', 'email', 'sedeId', 'sedeName'];
        let obj = await this.getObjectsUnityInfo(data, attributes);
        return obj;
    }
    // -------------------------------------------------------------------------

    async getGeneralList() {
        const axiosInstance = await this.getAxiosInstance();
        const response = await axiosInstance.get('sisgam_map/getGeneralList');
        let attributes = ['id','email', 'sede'];
        let obj = await this.getObjectsUnityInfo(response.data, attributes);
        return obj;
    }

    async getAllUnits() {
        const axiosInstance = await this.getAxiosInstance();
        const response = await axiosInstance.get('sisgam_unity/getAllUnits');
        return response.data;
    }

    async getAllUsers() {
        const axiosInstance = await this.getAxiosInstance();
        const response = await axiosInstance.get('sisgam_user/getAllUsers');
        return response.data;
    }

    async getCountUsers() {
        const axiosInstance = await this.getAxiosInstance();
        const response = await axiosInstance.get('sisgam_unity/getCountUsers');
        return response.data;
    }


    async getUserDetails(receiver_id) {
        const axiosInstance = await this.getAxiosInstance();
        const response = await axiosInstance.post('sisgam_unity/getUserDetails', { receiver_id: receiver_id });
        return response.data;
    }

    async insertUsers(email) {
        const axiosInstance = await this.getAxiosInstance();
        const response = await axiosInstance.post('sisgam_unity/insertUsers', { email: email });
        return response.data;
    }

    async deleteUsersByUnity(sede_id, receivers_id) {
        const axiosInstance = await this.getAxiosInstance();
        const response = await axiosInstance.post('sisgam_unity/deleteUsersByUnity', { sede_id: sede_id, receivers_id: receivers_id });
        return response.data;
    }

    async insertUsersByUnity(sede_id, receiver_id) {
        const axiosInstance = await this.getAxiosInstance();
        const response = await axiosInstance.post('sisgam_unity/insertUsersByUnity', { sede_id: sede_id, receiver_id: receiver_id });
        return response.data;
    }

    async bindMap(sede_id, receiver_id) {
        const axiosInstance = await this.getAxiosInstance();
        let response = null;
        response = await axiosInstance.post('sisgam_user/bindMap',
            { sedeId: sede_id, email: receiver_id })
            .catch(e => response = e.response);
        return response.data;
    }

}