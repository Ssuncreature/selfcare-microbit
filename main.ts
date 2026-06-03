//  Load Variables
let GoalA = 0
let GoalB = 0
let Overall = 0
//  Load Character
led.plot(1, 0)
led.plot(2, 0)
led.plot(3, 0)
led.plot(0, 1)
led.plot(2, 1)
led.plot(4, 1)
led.plot(1, 2)
led.plot(2, 2)
led.plot(3, 2)
//  Add to goal
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (GoalA < 3) {
        GoalA = GoalA + 1
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (GoalB < 2) {
        GoalB = GoalB + 1
    }
    
})
//  Progress Bar
basic.forever(function on_forever() {
    
    Overall = GoalA + GoalB
    if (Overall == 5) {
        led.plot(4, 4)
    }
    
    if (Overall >= 4) {
        led.plot(3, 4)
    }
    
    if (Overall >= 3) {
        led.plot(2, 4)
    }
    
    if (Overall >= 2) {
        led.plot(1, 4)
    }
    
    if (Overall >= 1) {
        led.plot(0, 4)
    }
    
})
