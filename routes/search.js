const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");

// Search route
router.get("/", async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) return res.redirect("/userIndex");

        // Find resorts by title or location (case insensitive)
        const results = await Listing.find({
            $or: [
                { title: { $regex: query, $options: "i" } },
                { location: { $regex: query, $options: "i" } }
            ]
        });

        res.render("listings/userIndex", { allListings: results });
    } catch (error) {
        console.error("Search Error:", error);
        req.flash("error", "Something went wrong with the search.");
        res.redirect("/userIndex");
    }
});

module.exports = router;
