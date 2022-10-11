# Airport challenge

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

## About the project
This is the first academy challenge. The aim is to demonstrate good Object Oriented Design understanding, as well as develop a solution following Test Driven Development methodology. 
</br></br>

## Built with
Java Script. 
</br></br>

## Getting started
- Clone this project to your local machine.
- Run this command to install all dependencies:
```
npm install
```
- To run all tests, run: 
```
node specRunner.js
```
- To run individual tests, run:
```
node test/fileName.spec.js
```
- By running the following command, you get to see the program's outcomes on the terminal:
```
node index.js
```
</br></br>

## Problem Statements
Following there is a breakdown of each user story into a Domain Model, as well as a description of the tests written to solve the tasks. 

### First user story
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

I want to test if a plane gets added to the landedPlanes array when I call landPlane().
I'll do this by checking if the array increases by one, and also checking if the value of the index 0 (as it's an empty array to begin with) is the expected.

### Second user story
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
#### Testing

I want to test if a new instance of an airport is created with a default capacity. I also want to check if, when calling setCapacity(), the default capacity is overridden.

### Third user story
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
#### Testing

I want to test that I'm unable to add any more planes when the airport is at capacity, I will also check if the code throws an error when trying to land a further plane. First I'll check that landedPlanes() doesn't include the plane after trying to land over capacity, using .includes()
Then I will check if the scenario above returns an error. This is not specifically in the criteria, but it makes sense to get an error when trying to do something that is not possible, using instanceof Error.

### Fourth user story
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
#### Testing

I want to test that takeOff() removes the indicated plane from the landedPlanes array. I'll check that landedPlanes.length reduces by one when I call takeOff(), and also that the right plane has been removed, using .includes().

### Fifth user story
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
#### Testing

I understand this story as checking if the plane is at the airport BEFORE we call takeOff() or landPlane(). I want to test that isAtAirport() returns true when a plane is at the specific airport, or false when it's not. For this story I need to create a mock airport object that has the method getLandedPlanes(), which returns an array either containing the plane or not.

This is when I realised I should have been creating a mock airplane in every test, as the planes will always be instances of Plane. I revisited all the tests and made the small change of adding the mock plane object and used it in the tests. 

### Edge cases
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
#### Testing

I want to test that landPlane() doesn't add a plane to the array if it is already there, I'll use .length() to check it doesn't increase. 
I also want to check that the scenario above and trying to call takeOff() on a plane that is not in the array, throw and error. I'll check this using instanceOf.

### Extended criteria
### Sixth user story
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
#### Testing

First I want to check that the weather instances get created with sunny as true by default. Then I want to check if randomWeather() generates integers between 0-3, that would be used to set the weather.
After I want to check if setWeather() changes sunny to false (stormy) when randomWeather() returns 0, or leaves it as true otherwise.
Then I want to check if planes are prevented from taking off when the weather is set to not sunny. I'll do this using .includes and .length on my test.
Lastly I want to check that the code throws an error if the weather is stormy.

With this user story I realised I don't know how to apply TDD when the output of a function can't be predicted. I got around it by setting the actual outcome as .setWeather() and the expected outcome as .isItSunny() after the  actual one. I run the test several times and always passes. It is my understanding this is because .setWeather() is actually changing the weather and isItSunny() returns the new weather, so they always match. For test 22 I was trying to make it so I'm setting the weather to stormy and then check if takeOff() throws an error. I haven't managed to make it work.
</br></br>

## Review
My main takeaway from this project was the power of TDD, to produce clean code that does exactly what it should, and nothing more. 

If I were to approach this challenge again today, I would complete the extended criteria. I was going on the right direction, but got stuck when it came to having the weather as a factor on the airport actions. 

