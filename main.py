# Load Variables
GoalA = 0
GoalB = 0
Overall = 0

# Load Character
led.plot(1, 0)
led.plot(2, 0)
led.plot(3, 0)
led.plot(0, 1)
led.plot(2, 1)
led.plot(4, 1)
led.plot(1, 2)
led.plot(2, 2)
led.plot(3, 2)

# Add to goal
def on_button_pressed_a():
    global GoalA
    if GoalA < 3:
        GoalA = GoalA + 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global GoalB
    if GoalB < 2:
        GoalB = GoalB + 1
input.on_button_pressed(Button.B, on_button_pressed_b)

# Progress Bar
def on_forever():
    global Overall
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

# blinking
def on_in_background():  
    def on_forever2():
        led.toggle(1, 1)
        led.toggle(3, 1)
        # half a second eyes closed
        control.wait_micros(500000)
        led.toggle(1, 1)
        led.toggle(3, 1)
        control.wait_micros(5000000)
        #5 seconds between blinks
    basic.forever(on_forever2)   
control.in_background(on_in_background)
