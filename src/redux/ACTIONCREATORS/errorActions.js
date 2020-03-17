export const registerError = (status, message) => {
    return { type: "REG-ERROR", status, message };
};
export const clearError = (status, message) => {
    return {
        type: "CLEAR-ERROR",
        status: status,
        message: message
    };
};