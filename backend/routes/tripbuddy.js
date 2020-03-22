const EXPRESS = require("express");
const TRIPBUDDYROUTES = EXPRESS.Router();
const TRIPBUDDY = require("../models/tripbuddy.model");

TRIPBUDDYROUTES.route("/buddy").post(function (req, res) {
    TRIPBUDDY.findOne({ trip_id: req.body.trip_id, buddy_id: req.body.buddy_id }).then(tripbuddy => {
        if (tripbuddy != null) {
            res.status(200).json({
                response: "That User has already been invited",
                saved: true
            });
        } else {
            const B = new TRIPBUDDY({
                owner_id: req.body.owner_id,
                trip_id: req.body.trip_id,
                buddy_id: req.body.buddy_id,
                buddy_first_name: req.body.buddy_first_name,
                buddy_last_name: req.body.buddy_last_name,
                buddy_picture: req.body.buddy_picture,
                accepted: req.body.accepted,
                denied: req.body.denied,
                pending: req.body.pending

            })

            B.save().then(x => {
                console.log(x);
                res.status(200).json({
                    saved: true,
                    response_message: "TripBuddy created!",
                    tripbuddy: x
                });
            }).catch(err => {
                console.log(err);
                res.status(200).json({
                    saved: false,
                    response_message: "Creating TripBuddy failed!",
                    tripbuddy: null
                });
            });
        }
    }).catch(err => {
        console.log(err);
    })


});

TRIPBUDDYROUTES.route("/buddy/:trip_id").get(function (req, res) {
    TRIPBUDDY.find({ trip_id: req.params.trip_id })
        .then(tripbuddy => {
            if (tripbuddy != null) {
                res.status(200).json({
                    tripbuddy: tripbuddy
                })
            } else {
                res.status(400).json({
                    tripbuddy: null
                })
            }
        });
});

TRIPBUDDYROUTES.route("/buddypending/:buddy_id").get(function (req, res) {
    TRIPBUDDY.find({ buddy_id: req.params.buddy_id })
        .then(tripbuddy => {
            if (tripbuddy != null) {
                res.status(200).json({
                    tripbuddy: tripbuddy
                })
            } else {
                res.status(400).json({
                    tripbuddy: null
                })
            }
        });
});

TRIPBUDDYROUTES.route("/buddypending/:_id").put(function (req, res) {
    TRIPBUDDY.findByIdAndUpdate(
        { _id: req.params._id },
        {
            $set: { accepted: req.body.accepted, denied: req.body.denied, pending: req.body.pending }
        }
    ).then(response => {
        res.status(200).json({

        })
        console.log(response);
    }).catch(err => {
        console.log(err);
    })
});

TRIPBUDDYROUTES.route("/buddy").get(function (req, res) {
    TRIPBUDDY.find(function (err, comment) {
        if (err) {
            console.log(err);
        } else {
            res.json(comment);
        }
    });
});

TRIPBUDDYROUTES.route("/buddy/:id").delete(function (req, res) {
    TRIPBUDDY.deleteMany({ trip_id: req.params.id })
        .then(tripbuddy => {
            if (tripbuddy != null) {
                res.status(200).json({
                    response_message: "Travel Buddies removed",
                    tripbuddy: tripbuddy
                });
            } else {
                res.status(400).json({
                    tripbuddy: null
                })
            }
        })
})




module.exports = TRIPBUDDYROUTES;