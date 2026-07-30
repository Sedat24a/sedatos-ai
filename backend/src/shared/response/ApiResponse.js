class ApiResponse {
  constructor(success, data = null, message = null, meta = null) {
    this.success = success;
    this.data = data;
    this.message = message;
    this.meta = meta;
    this.timestamp = new Date().toISOString();
  }

  static success(data = null, message = "Success", meta = null) {
    return new ApiResponse(true, data, message, meta);
  }

  static error(message = "Error", data = null, meta = null) {
    return new ApiResponse(false, data, message, meta);
  }
}

module.exports = ApiResponse;