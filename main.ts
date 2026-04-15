input.onButtonPressed(Button.A, function () {
    SENColor.calibrate()
})
let green_lol = 0
let green = 0
let blue = 0
let blue_lol = 0
let red_lol = 0
let red = 0
let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
SENColor.setPins(
DigitalPin.P15,
DigitalPin.P1,
DigitalPin.P8,
DigitalPin.P12,
DigitalPin.P2
)
basic.forever(function () {
    if (SENColor.getColor(color.red) <= 50) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # . . # .
            `)
    } else if (SENColor.getColor(color.blue) <= 50) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.showLeds(`
            # # . . .
            # . # . .
            # # # . .
            # . # . .
            # # . . .
            `)
    } else if (SENColor.getColor(color.green) <= 50) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . # # .
            # . . . #
            . # # # .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . # . .
            . . # . .
            `)
        strip.showRainbow(1, 360)
    }
})
basic.forever(function () {
    red = SENColor.getColor(color.red)
    basic.pause(2000)
    red_lol = SENColor.getColor(color.red)
    if (red == red_lol) {
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
basic.forever(function () {
    blue_lol = SENColor.getColor(color.blue)
    basic.pause(2000)
    blue = SENColor.getColor(color.blue)
    if (blue == blue_lol) {
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
basic.forever(function () {
    green = SENColor.getColor(color.green)
    basic.pause(2000)
    green_lol = SENColor.getColor(color.green)
    if (green == green_lol) {
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
