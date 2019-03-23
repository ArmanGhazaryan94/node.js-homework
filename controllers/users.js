import User from '../models/UserSchema';

export const getAllUsers = (req, res) => {
    User
        .find()
        .then(data => res.json(data))
        .catch(err => res.send(err));
};

export const deleteUser = (req, res) => {
    const id = req.params.id;

    User
        .findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                return res.json({
                    code: 404,
                    message: 'User not found'
                });
            }

            res.json(data);
        })
        .catch(err => res.send(err));
};