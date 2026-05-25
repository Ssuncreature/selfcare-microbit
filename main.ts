let GoalA = 0
let GoalB = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    GoalA = GoalA + 1
    if (GoalA > 3) {
        GoalA = 0
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    GoalB = GoalB + 1
    if (GoalB > 2) {
        GoalB = 0
    }
    
})
basic.forever(function on_forever() {
    let Overall = GoalA + GoalB
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
