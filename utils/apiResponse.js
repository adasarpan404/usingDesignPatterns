class ApiResponse {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }

    clone() {
        return new ApiResponse(this.status, this.message);
    }
}

const successPrototype = new ApiResponse(200, "Success");
const errorPrototype = new ApiResponse(500, "Internal Server Error");

module.exports = { successPrototype, errorPrototype };
