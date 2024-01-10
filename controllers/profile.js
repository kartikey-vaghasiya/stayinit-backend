const Profile = require("../models/Profile");
const User = require("../models/User");

const getOneProfile = async (req, res) => {
    try {
        // getting profileId from request params
        const { profileId } = req.params;

        // missing variable check
        if (!profileId) {
            return res.status(400).json({
                "success": false,
                "message": "you did not provide profileId in params",
            });
        }

        // getting profile from database and returning response
        const profileInDb = await Profile.findById(profileId);
        if (!profileInDb) {
            return res.status(404).json({
                "success": false,
                "message": "we don't have any profile with this profileId",
            });
        }

        res.status(200).json({
            "success": true,
            "message": "profile found successfully",
            "data": profileInDb,
        });

    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": error.message,
        });
    }
}

const updateProfile = async (req, res) => {
    try {
        // getting data from request
        const { _id: profile } = req.profile;

        const {
            username,
            firstname,
            lastname,
            profilePiture
        } = req.body;


        // updating the profile
        const updatedProfile = await Profile.findOneAndUpdate(
            { _id: profile },
            req.body,
            { new: true }
        )

        if (username) {
            await User.findOneAndUpdate(
                { profile: profile },
                { username: username },
                { new: true });
        }

        res.status(200).json({
            "success": true,
            "message": "your profile has been updated successfully",
            "data": updatedProfile,
        });

    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": error.message,
        });
    }
}


module.exports = {
    getOneProfile,
    updateProfile,
}