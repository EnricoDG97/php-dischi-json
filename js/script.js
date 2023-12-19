const {createApp} = Vue

createApp({
    data() {
        return {
            apiUrl: "server.php",
            diskList: [],
            selectedDisk: null,
            showDisk: false
        }
    },
    created() {
        axios.get(this.apiUrl)
        .then((resp) => {
            this.diskList = resp.data;
        });
    },
    methods: {
        getDisk(index) {
            axios
            .get(this.apiUrl, {
                params: {
                    index: index,
                },
            })
            .then((resp) => {
                this.selectedDisk = resp.data;
                this.showDisk = true;
            });
        },
        closeWindow() {
            this.showDisk = false;
            this.selectedDisk = null;
        }
    },

}).mount("#app");