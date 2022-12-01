input.onPinPressed(TouchPin.P0, function () {
    Tip += -1
    if (Tip == 0) {
        Tip = 1
    }
    whaleysans.showNumber(Tip)
})
input.onButtonPressed(Button.A, function () {
    Pocet_sten += -1
    if (Pocet_sten == 1) {
        Pocet_sten = 2
    }
    whaleysans.showNumber(Pocet_sten)
})
input.onPinPressed(TouchPin.P2, function () {
    Tip += 1
    if (Tip == Pocet_sten + 1) {
        Tip = Pocet_sten
    }
    whaleysans.showNumber(Tip)
})
input.onButtonPressed(Button.B, function () {
    Pocet_sten += 1
    if (Pocet_sten == 21) {
        Pocet_sten = 20
    }
    whaleysans.showNumber(Pocet_sten)
})
input.onPinPressed(TouchPin.P1, function () {
    if (Tip == Number2) {
        blok = 0
        music.playTone(988, music.beat(BeatFraction.Whole))
        Pocet_kol += 1
    } else {
        Trestné_body += 1
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.showNumber(Trestné_body)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (blok == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        Number2 = randint(1, Pocet_sten)
        blok = 1
    }
})
let Number2 = 0
let Trestné_body = 0
let Tip = 0
let blok = 0
let Pocet_sten = 0
Pocet_sten = 2
blok = 0
Tip = 1
Trestné_body = 0
let Pocet_kol = 0
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
basic.forever(function () {
    if (Trestné_body == 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (Pocet_kol == 5) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
