const error = new Error();

const createError = (type) => {
    switch (type) {
        case "NOTFOUND":
            error.status = 404;
            error.message = "Requested document is not found";
            return error;
        case "EMPTYRESULT":
            error.status = 404;
            error.message = "No results found";
            return error;
        default:
            break;
    }
};

module.exports = { createError };
