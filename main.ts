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
        datalogger.deleteLog()
        datalogger.log(datalogger.createCV("A", GoalA), datalogger.createCV("B", GoalB))
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (GoalB < 2) {
        GoalB = GoalB + 1
        datalogger.deleteLog()
        datalogger.log(datalogger.createCV("A", GoalA), datalogger.createCV("B", GoalB))
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
//  blinking
control.inBackground(function on_in_background() {
    // 5 seconds between blinks
    basic.forever(function on_forever2() {
        led.toggle(1, 1)
        led.toggle(3, 1)
        //  half a second eyes closed
        control.waitMicros(500000)
        led.toggle(1, 1)
        led.toggle(3, 1)
        control.waitMicros(5000000)
    })
})
//  daily reset
//  theoretically should work - this one is the rudimentary one
timeanddate.onDayChanged(function on_day_changed() {
    let GoalA = 0
    let GoalB = 0
    let Overall = 0
    led.unplot(0, 4)
    led.unplot(1, 4)
    led.unplot(2, 4)
    led.unplot(3, 4)
    led.unplot(4, 4)
    datalogger.deleteLog()
})
