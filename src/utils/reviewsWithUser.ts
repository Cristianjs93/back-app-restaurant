export function getReviewsWithUser(reviews: any, users: any) {
  const reviewsWithUser = reviews.map((review: any) => {
    const userForReview = users.find((user: any) => user.id === review.userId);
    return {
      ...review,
      user: userForReview.firstName,
    };
  });

  reviewsWithUser.forEach((review: any) => delete review.userId);

  return reviewsWithUser;
}
