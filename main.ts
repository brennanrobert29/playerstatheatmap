radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= 52) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
