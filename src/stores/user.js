import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        user: {}
    }),
    actions: {
        /**
         * Attempt to login a user
         * @param {string} user
         * @param {string} password
         */
        async login(user, password) {

            var data = {
                username: user,
                password: password,
            };

            /*  LLamada a la api para pedir los datos de la tabla */
            let res;

            try {
                res = await axios.post(import.meta.env.VITE_APP_BASEURL+'/login', data)
            } catch (error) {
                return false;
            }

            if (res.data == null || res.data.id == null) {
                return false;
            }

            // Grab the users data and permissions from the api

            await this.refresh();

            return true;
        },
        async refresh() {

            // Fill with the users data from the api
            this.user = {}

            return true;
        },
        async getUser() {
            // @ts-ignore
            if (this.user == null || this.user == {} || this.user.id == null) {
                await this.refresh();
            }
            return this.user;
        },
        async logout() {
            await axios.post(import.meta.env.APP_BASEURL + '/logout');
            this.user = {};
        },
    }
});