GoalA = 0
GoalB = 0

def on_button_pressed_a():
    global GoalA
    GoalA = GoalA + 1
    if GoalA > 3:
        GoalA = 0
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_button_pressed_b():
    global GoalB
    GoalB = GoalB + 1
    if GoalB > 2:
        GoalB = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    Overall = GoalA + GoalB
    if Overall == 5:
        led.plot(4, 4)
    if Overall >= 4:
        led.plot(3, 4)
    if Overall >= 3:
        led.plot(2, 4)
    if Overall >= 2:
        led.plot(1, 4)
    if Overall >= 1:
        led.plot(0, 4)
basic.forever(on_forever)