GoalA = 0
GoalB = 0
Overall = GoalA + GoalB
if GoalA > 3:
    GoalA = 0
if GoalB > 2:
    GoalB = 0

def on_button_pressed_a():
    global GoalA
    GoalA = GoalA + 1
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_button_pressed_b():
    global GoalB
    GoalB = GoalB + 1
input.on_button_pressed(Button.B, on_button_pressed_b)
