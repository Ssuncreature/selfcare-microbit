let GoalA = 0
let GoalB = 0
let Overall = GoalA + GoalB
if (GoalA > 3) {
    GoalA = 0
}

if (GoalB > 2) {
    GoalB = 0
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    GoalA = GoalA + 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    GoalB = GoalB + 1
})
