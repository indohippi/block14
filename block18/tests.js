/*

Unit Tests

Prompt 1 - A function called "multiplication" that returns the product of the two input numbers.

Prompt 1 Tests - 

1. multiplication(2, 3) => 6
2. multiplication(0, 5) => 0
3. multiplication(-2, 3) => -6
4. multiplication(2.5, 4) => 10
5. multiplication("2", "3") => Error (Invalid input)

Prompt 2 - A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

Prompt 2 Tests -

1. concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) => [-1, 1, 3, 9, 15]
2. concatOdds([], [1, 3, 5]) => [1, 3, 5]
3. concatOdds([2, 4], [0, -2]) => []
4. concatOdds([2, "4"], [0, "three"]) => Error (Invalid input)
5. concatOdds("test", [1, 3, 5]) => Error (Invalid input)

Functional Tests

Prompt 1 - A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

Prompt 1 Tests -

1. Test that the user can select the "Check out as a guest" option.
2. Test that the user can enter shipping and payment information as a guest.
3. Test that the user is prompted to create an account or log in after checking out as a guest.
4. Test that the user can select the "Log in" option and proceed with the checkout.
5. Test that the user can see their saved shipping and payment information when logged in.
6. Test that the user can complete the checkout process when logged in.
7. Test that an error message is displayed if the cart is empty during checkout.
8. Test that the user is shown a confirmation screen with the order summary upon completing the checkout.

*/
