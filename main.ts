/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Tesfaye
 * Created on: Jan 2025
 * This program comunicates with another microbit to scroll on phone
*/

radio.setGroup(1)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello, World!")
    basic.showIcon(IconNames.Happy)
})
