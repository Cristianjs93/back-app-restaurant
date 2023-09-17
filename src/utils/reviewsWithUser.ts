import { Reviews, ReviewsWithUser } from '../api/reviews/reviews.types';
import { UsersResponse } from '../api/users/user.types';

export function getReviewsWithUser(reviews: Reviews[], users: UsersResponse[]) {
  const reviewsWithUser: ReviewsWithUser[] = reviews.map((review: Reviews) => {
    const userForReview = users.find(
      (user: UsersResponse) => user.id === review.userId,
    ) as UsersResponse;

    return {
      ...review,
      user: userForReview.firstName,
      userEmail: userForReview.email,
    };
  });

  reviewsWithUser.forEach((review: ReviewsWithUser) => delete review.userId);

  return reviewsWithUser;
}
