# Airport challenge

Instructions
-------------
* To run all the tests, run node specRunner.js.
* To run individual tests, run node test/fileName.spec.js.
* To see the project in action, run node index.js and see the outcomes on the terminal. 
* Following you will find a domain model per user story, as well as an explanation of my approach to testing and coding. 


## First user story
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```
| **Object** | **Message** |
| ---------- | ----------- |
| Airport | landPlane(plane) |
| Plane |  |

| **Object** | **Property** | **Message** | **Output** |
| ---------- | ------------ | ----------- | ---------- |
| Airport |  landedPlanes @array | landPlane() |  |
|         |                      | getLandedPlanes()| landedPlanes @array |
| Plane   |   planeID             |             | | 
#### Testing
```
I want to test if a plane gets added to the landedPlanes array when I call landPlane().
I'll do this by checking if the array increases by one, and also checking if the value of the index 0 (as it's an empty array to begin with) is the expected.
```
#### Code
```
In the class Airport, I created a property landedPlanes that is an empty array. Then I created a method landPlane() that adds an input to landedPlanes by using .push(input). 
```

## Second user story
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
| **Object** | **Message** |
| ---------- | ----------- |
| Airport | setCapacity() |

| **Object** | **Property** | **Message** | **Output** |
| ---------- | ------------ | ----------- | ---------- |
| Airport |  capacity@number | setCapacity() |  |
|          |                 | getCapacity() | @number |
### Testing
```
I want to test if a new instance of an airport is created with a default capacity. I also want to check if, when calling setCapacity(), the default capacity is overridden.
```
### Code
```
In the class Airport, I created a property capacity and set it to 100. To implement encapsulation, I set both properties as private (here I revisited the first story to adjust to the property being private). 
I created a method setCapacity() that takes as an input the desired new capacity. I also created getCapacity() and getLandedPlanes() to be able to run my tests.
```

## Third user story
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
| **Object** | **Message** |
| ---------- | ----------- |
| Error      |             |
| Airport | landPlane(plane) |
| Plane |  |

| **Object** | **Property** | **Message** | **Output** |
| ---------- | ------------ | ----------- | ---------- |
| Error   |  message @string|             | @string    |
| Airport |  landedPlanes @array | landPlane() | Error |
|         |  capacity@number     |  |  |
| Plane   |   planeID             |             | | 
### Testing
```
I want to test that I'm unable to add any more planes when the airport is at capacity, I will also check if the code throws an error when trying to land a further plane. First I'll check that landedPlanes() doesn't include the plane after trying to land over capacity, using .includes()
Then I will check if the scenario above returns an error. This is not specifically in the criteria, but it makes sense to get an error when trying to do something that is not possible, using instanceof Error.
```
### Code
```
In landPlane() I added a condition to check if capacity is greater than landedPlanes.length. If that is the case, the plane can be added (code from first story) otherwise it will throw and error.
```

## Fourth user story
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```
| **Object** | **Message** |
| ---------- | ----------- |
| Airport | takeOff(plane) |
| Plane |  |

| **Object** | **Property** | **Message** | **Output** |
| ---------- | ------------ | ----------- | ---------- |
| Airport |  landedPlanes @array | takeOff()        | landedPlanes @array |
|         |                      | getLandedPlanes()| landedPlanes @array |
| Plane   |   planeID            |             | | 
### Testing
```
I want to test that takeOff() removes the indicated plane from the landedPlanes array. I'll check that landedPlanes.length reduces by one when I call takeOff(), and also that the right plane has been removed, using .includes().
```
### Code
```
In Airport I created a method takeOff() that removes the plane that is passed as argument from the landedPlanes array. I did it by using .filter(), I passed an argument of planes and declared this to be all the elements in the array apart from the argument of takeOff(). This returns a new array that includes all the elements in landedPlanes but the argument of takeOff(). This new array becomes landedPlanes.
```

## Fifth user story
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
| **Object** | **Message** |
| ---------- | ----------- |
| Airport | takeOff(plane) |
|         | landPlane(plane)|
| Plane   | isAtAirport()  |

| **Object** | **Property** | **Message** | **Output** |
| ---------- | ------------ | ----------- | ---------- |
| Airport |  landedPlanes @array |  takeOff()    |     |
|         |                      | landPlane()   |     |
| Plane   |   planeID            | isAtAirport() | @boolean | 
### Testing
```
I understand this story as checking if the plane is at the airport BEFORE we call takeOff() or landPlane(). I want to test that isAtAirport() returns true when a plane is at the specific airport, or false when it's not. For this story I need to create a mock airport object that has the method getLandedPlanes(), which returns an array either containing the plane or not.
```
```
This is when I realised I should have been creating a mock airplane in every test, as the planes will always be instances of Plane. I revisited all the tests and made the small change of adding the mock plane object and used it in the tests. 
```
### Code
```
I created the class Plane in a separate file, with a constructor that takes the argument of planeID, which will be the name of the plane. 
I then coded the method isAtAirport, which takes an instance of an airport as argument. Here I loop through that airport's landedPlanes to find if any of the arrays elements planeID matches the planeID we are checking. 
I then added the condition of only looping through the array if it's not empty, and return false if it is.
I tried using array methods but couldn't get it to work, so I left it as a for loop.
```

## Edge cases
```
Here I considered what should happen when I call landPlane() on a plane that is already at the airport, or when I call takeOff() on a plane that is not there.  
```
| **Object** | **Message** |
| ---------- | ----------- |
| Error      |             |
| Airport | takeOff(plane) |
|         | landPlane(plane)|
| Plane |  |

| **Object** | **Property** | **Message** | **Output** |
| ---------- | ------------ | ----------- | ---------- |
| Error   |  message @string|             | @string    |
| Airport |  landedPlanes @array | takeOff()   | Error |
|         |                      | landPlane() | Error |
|         |                      | getLandedPlanes()| landedPlanes @array |
| Plane   |   planeID            |             | | 
### Testing
```
I want to test that landPlane() doesn't add a plane to the array if it is already there, I'll use .length() to check it doesn't increase. 
I also want to check that the scenario above and trying to call takeOff() on a plane that is not in the array, throw and error. I'll check this using instanceOf.
```
### Code
```
In landPlane() I added a condition to check if the argument is already in the array, using .includes(). If it does, it throws an error, otherwise it runs the code as previously. 
In takeOff() I added the same condition as in landPlane(). If the argument is in the array, the code runs as it did before, otherwise it throws an error. 
```
## Extended criteria
## Sixth user story
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```
| **Object** | **Message** |
| ---------- | ----------- |
| Error      |             |
| Airport | takeOff(plane) |
|         | checkWeather()
| Weather | setWeather()   |
| Plane |  |

| **Object** | **Property** | **Message** | **Output** |
| ---------- | ------------ | ----------- | ---------- |
| Error   |  message @string|             | @string    |
| Airport |  landedPlanes @array | takeOff()   | Error |
|         |                      | getLandedPlanes()| landedPlanes @array |
|         |       forecast      | checkWeather() | @boolean |
| Weather | sunny  |            | setWeather() | @boolean|
|         |        |            | isItSunny()  | @boolean |
|         |        |            | randomWeather() | number |
| Plane   |   planeID            |             | | 
### Testing
```
First I want to check that the weather instances get created with sunny as true by default. Then I want to check if randomWeather() generates integers between 0-3, that would be used to set the weather.
After I want to check if setWeather() changes sunny to false (stormy) when randomWeather() returns 0, or leaves it as true otherwise.
Then I want to check if planes are prevented from taking off when the weather is set to not sunny. I'll do this using .includes and .length on my test.
Lastly I want to check that the code throws an error if the weather is stormy.
```
```
With this user story I realised I don't know how to apply TDD when the output of a function can't be predicted. I got around it by setting the actual outcome as .setWeather() and the expected outcome as .isItSunny() after the  actual one. I run the test several times and always passes. It is my understanding this is because .setWeather() is actually changing the weather and isItSunny() returns the new weather, so they always match. 
For test 22 I was trying to make it so I'm setting the weather to stormy and then check if takeOff() throws an error. I haven't managed to make it work.
```
### Code
```
I've created Weather class in a separate file and gave it a property sunny that is true by default. Then I've created a randomWeather() function that returns an integer between 0-3, using math.random() multiplied by 3 and applying .floor to the result. 
In setWeather() I used a ternary operator, if the number from randomWeather() is 0, sunny is set to false (stormy), otherwise it's true. 
IsItSunny() return the value of sunny, as this is a private property.

In airport I added a property forecast and a method checkWeather that takes an instance of Weather as argument, sets forecast to the value of isItSunny()- true or false (sunny or stormy). 

It was my intention to then set a condition in takeOff() to check this.#forecast and if it's false, throw an error. I coded this as !this.#forecast ? new Error('Abort take off, weather stormy') : <code as it is now> and test 22 passed, but made previous tests on takeOff() fail. I believe there is something wrong with the logic I was trying to apply, but I'm unable to find what it is, so I leave the extended criteria here. 
I would have applied the same logic to landPlane() in stormy conditions. 
```


Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

Instructions
---------

* Feel free to use google, your notes, books, etc. but work on your own.
* Keep it SIMPLE - it's not nearly as complicated as it first may look.
* You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
* Use your own test framework and evidence your test-driven development by committing on passing tests.
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* Please create separate files for every class, module, and spec.

Steps
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src` - Optional but recommended!

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.
