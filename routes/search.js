// const express = require("express");
// const router = express.Router();
// const Listing = require("../models/listing");

// // Search route
// router.get("/", async (req, res) => {
//     try {
//         const query = req.query.q;
//         if (!query) return res.redirect("/userIndex");

//         // Find resorts by title or location (case insensitive)
//         const results = await Listing.find({
//             $or: [
//                 { title: { $regex: query, $options: "i" } },
//                 { location: { $regex: query, $options: "i" } }
//             ]
//         });

//         res.render("listings/userIndex", { allListings: results });
//     } catch (error) {
//         console.error("Search Error:", error);
//         req.flash("error", "Something went wrong with the search.");
//         res.redirect("/userIndex");
//     }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");

// Search, Price Filter & Sorting Route
router.get("/", async (req, res) => {
    try {
        const { q, priceFilter, sortBy } = req.query;
        let filterConditions = {};

        // Search by Name or Location
        if (q) {
            filterConditions.$or = [
                { title: { $regex: q, $options: "i" } },
                { location: { $regex: q, $options: "i" } }
            ];
        }

        // Apply Price Filter
        if (priceFilter) {
            let priceRange = priceFilter.split("-");
            if (priceRange.length === 2) {
                filterConditions.price = { $gte: parseInt(priceRange[0]), $lte: parseInt(priceRange[1]) };
            } else if (priceFilter === "10001") {
                filterConditions.price = { $gte: 10001 }; // Above ₹10,000
            }
        }

        // Set Sorting Order (1 = Ascending, -1 = Descending)
        let sortOptions = {};
        if (sortBy === "low-high") {
            sortOptions.price = 1; // Sort by price (Low to High)
        } else if (sortBy === "high-low") {
            sortOptions.price = -1; // Sort by price (High to Low)
        }

        // Fetch Listings Based on Filters and Sorting
        const results = await Listing.find(filterConditions).sort(sortOptions);

        res.render("listings/userIndex", { 
            allListings: results, 
            searchQuery: q, 
            selectedPrice: priceFilter,
            selectedSort: sortBy
        });
    } catch (error) {
        console.error("Search Error:", error);
        req.flash("error", "Something went wrong.");
        res.redirect("/userIndex");
    }
});

module.exports = router;
