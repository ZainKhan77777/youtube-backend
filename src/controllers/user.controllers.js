import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    // const { username, email, fullName, password } = req.body;
    // const user = await User.create({ username, email, fullName, password });
    res.status(201).json({
        success: true,
        message: "ok",
        // user,
    });
});

export default registerUser;