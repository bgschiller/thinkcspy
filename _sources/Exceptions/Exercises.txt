Exercises
---------
.. container:: full_width


1.

    .. tabbed:: q4

        .. tab:: Question

            Fill out the ``main`` function below so that you handle two exceptions that may be raised by your call to ``some_function``. If this function raises a ``ValueError``, print "value error happening now"; if this function raises a ``UnicodeError``, print "unicode error happening now". Make sure your code can handle both errors. (Note: since ``some_function`` isn't filled out, neither exception will be raised when you run the program.)

            .. activecode:: exceptions_ex4

              def some_function():
                  # Imagine code that could raise value or unicode errors
                  pass

              def main():
                  # Put your exception handling code below
                  some_function()

              if __name__ == "__main__":
                  main()

        .. tab:: Answer

            .. activecode:: exceptions_answer4

              def some_function():
                  # Imagine code that could raise value or unicode errors
                  pass

              def main():
                  try:
                      some_function()
                  except UnicodeError:
                      print("unicode error happening now")
                  except ValueError:
                      print("value error happening now")

              if __name__ == "__main__":
                  main()

These next several problems are variations on a theme. Each will have you return a string that consists of a shape built out of ``#`` (hash) characters. It is left up to you to add the code you would need to run your functions (i.e., adding a ``main`` function and calling the respective function). These problems build in difficulty, and are examples in how solving smaller problems can lead you to incrementally build the solutions to larger problems.

2.

    .. tabbed:: q5

        .. tab:: Question

            Write a function ``line(n)`` that returns a line with exactly ``n`` hashes.

            **Example:**
              ``print(line(5))``

            **Output:**
              ``#####``

            .. activecode:: exceptions_ex5



        .. tab:: Answer

            .. activecode:: exceptions_answer5

              def line(n):
                  line_str = ''
                  for i in range(n):
                      line_str = line_str + '#'

                  return line_str

              def main():
                  print(line(5))

              if __name__ == "__main__":
                  main()

3.

    .. tabbed:: q6

        .. tab:: Question

            Write a function ``square(n)`` that returns an ``n`` by ``n`` square of hashes. Utilize your ``line`` function.

            **Example:**
              ``print(square(5))``

            **Output:**

            .. code-block:: Python

              #####
              #####
              #####
              #####
              #####

            .. activecode:: exceptions_ex6


        .. tab:: Answer

            .. activecode:: exceptions_answer6

              def line(n):
                  line_str = ''
                  for i in range(n):
                      line_str = line_str + '#'

                  return line_str

              def square(n):
                  square_str = ''
                  for i in range(n):
                      square_str += (line(n) + '\n')
                  return square_str

              def main():
                  print(square(5))

              if __name__ == "__main__":
                  main()

4.

    .. tabbed:: q7

        .. tab:: Question

            Write a function ``rectangle(width, height)`` that returns a rectangle of the width and height given by the parameters. Again, utilize your ``line`` function to do this.

            **Example:**
              ``print(rectangle(5, 3))``

            **Output:**

            .. code-block:: Python

              #####
              #####
              #####

            .. activecode:: exceptions_ex7


        .. tab:: Answer

            .. activecode:: exceptions_answer7

              def line(n):
                  line_str = ''
                  for i in range(n):
                      line_str = line_str + '#'

                  return line_str

              def rectangle(width, height):
                  rectangle_str = ''
                  for i in range(height):
                      rectangle_str += (line(width) + '\n')

                  return rectangle_str

              def main():
                  print(rectangle(5, 3))

              if __name__ == "__main__":
                  main()

5.

    .. tabbed:: q8

        .. tab:: Question

            Write a function ``stairs(n)`` that prints the pattern shown below, with height ``n``.  Again, utilize your ``line`` function to do this.

            **Example:**
              ``stairs(5))``

            **Output:**

            .. code-block:: Python

              #
              ##
              ###
              ####
              #####

            .. activecode:: exceptions_ex8


        .. tab:: Answer

            .. activecode:: exceptions_answer8

              def line(n):
                  line_str = ''
                  for i in range(n):
                      line_str = line_str + '#'

                  return line_str

              def stairs(n):
                  stair_str = ''
                  for level_len in range(n):
                      stair_str += (line(level_len+1) + '\n')

                  return stair_str

              def main():
                  print(stairs(5))

              if __name__ == "__main__":
                  main()

6.

    .. tabbed:: q9

        .. tab:: Question

            Write a function ``space_line(spaces, hashes)`` that returns a line with exactly the specified number of spaces, followed by the specified number of hashes.

            **Example:**
              ``print(space_line(3,5))``

            **Output:**

            .. code-block:: Python

              #This is where the edge is, so there's 3 spaces before hashes
                 #####

            .. activecode:: exceptions_ex9


        .. tab:: Answer

            .. activecode:: exceptions_answer9

              def space_line(spaces, hashes):
                  return spaces * ' ' + hashes * '#'

              def main():
                  print(space_line(3, 5))

              if __name__ == "__main__":
                  main()

7.

    .. tabbed:: q10

        .. tab:: Question

            Write a function ``triangle(n)`` that returns an upright triangle of height ``n``.

            **Example:**
              ``print(triangle(5))``

            **Output:**

            .. code-block:: Python

                    #
                   ###
                  #####
                 #######
                #########

            .. activecode:: exceptions_ex10


        .. tab:: Answer

            .. activecode:: exceptions_answer10

              def space_line(spaces, hashes):
                  return spaces * ' ' + hashes * '#'

              def triangle(n):
                  triangle_str = ''
                  for i in range(n):
                      triangle_str += (space_line(n-i-1, 2*i+1) + '\n')
                  return triangle_str

              def main():
                  print(triangle(5))

              if __name__ == "__main__":
                  main()

8.

    .. tabbed:: q11

        .. tab:: Question

            Write a function ``diamond(n)`` that returns a diamond where the triangle formed by the top portion has height ``n``. Notice that this means the diamond has ``2n - 1`` rows.

            **Example:**
              ``diamond(5))``

            **Output:**

            .. code-block:: Python

                    #
                   ###
                  #####
                 #######
                #########
                 #######
                  #####
                   ###
                    #

            .. activecode:: exceptions_ex11


        .. tab:: Answer

            .. activecode:: exceptions_answer11

              def space_line(spaces, hashes):
                  return spaces * ' ' + hashes * '#'

              def triangle(n):
                  triangle_str = ''
                  for i in range(n):
                      triangle_str += (space_line(n-i-1, 2*i+1) + '\n')
                  return triangle_str

              def diamond(n):
                  diamond_str = triangle(n)
                  for i in range(n-2, -1, -1):
                      diamond_str += (space_line(n-i-1, 2*i+1) + '\n')
                  return diamond_str

              def main():
                  print(diamond(5))

              if __name__ == "__main__":
                  main()
