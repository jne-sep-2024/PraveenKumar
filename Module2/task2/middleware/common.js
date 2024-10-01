import user from '../user.json' assert { type: "json" };

export const checkIfIdExists = (req, res, next) => {
    try {
        const { id } = req.params;

        const userById = user.users.find((data) => data.id == id);

        if (!userById) {
            throw new Error("User not found for provided ID, please try with different ID.")
        }

        next()
    } catch (err) {
        res.status(404).json({ message: err.message, data: null, statusCode: 404 })
    }
}
