const HandleViewUser = (userId, data) => {
    if (userId !== undefined) {
        console.log("View button clicked for user ID:", userId);
    } else {
        console.error("User ID is undefined");
        console.log("Data:", data);
    }
};

export default HandleViewUser;