"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviewsWithUser = void 0;
function getReviewsWithUser(reviews, users) {
    const reviewsWithUser = reviews.map((review) => {
        const userForReview = users.find((user) => user.id === review.userId);
        return Object.assign(Object.assign({}, review), { user: userForReview.firstName, userEmail: userForReview.email });
    });
    reviewsWithUser.forEach((review) => delete review.userId);
    return reviewsWithUser;
}
exports.getReviewsWithUser = getReviewsWithUser;
