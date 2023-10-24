[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12515170&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## My Runtime Analysis

To start the recurrence analysis, we need to find the first for loop we need to run through at most n times. This is because it is set up to run at most n times.

Next, we have to analyze the second for loop. This also means we analyze the for loop inside as well because, in the worst-case scenario, we always go there first. This for loop would run at different times depending on how many items are in the list. So it would be a summation that would look like $\sum_{i=0}^{n}n-i$. This would simplify down to $n^2-\sum_{i=0}^{n}i$ which can further simplify down into $n^2$.

Now we have to analyze the second set of for loops. This for loop runtime would look very similar to the previous for loop runtime. This is because this loop checks to see if what is in the array needs to be moved and in the worst-case scenario we always move one number one spot. This means the runtime looks like $\sum_{i=1}^{n}n-i$, which simplifies to $n^2-n-\sum_{i=0}^{n}i$ which further simplifies down to $n^2$.

Using these analyses we can combine them to look like $2n^3$ since we have to add the second and third analyses, and then multiply them by the first for loop. Of course, there is one loop outside of these, but this would run at most n times which can be ignored because it is a lower-order term. This means that the final $\theta$ looks like $\theta(n^3)$

