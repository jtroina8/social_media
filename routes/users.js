const req = require("express/lib/request");
const router = require("express").Router();
const bcrypt = require("bcrypt")

// update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        if (req.body.password){
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
        }
    } else {
        return res.status(403).json("You can update only your account!")
    }
})

// delete user
// get a user
// follow a user
// unfollow

module.exports = router